import {
  TextInput,
  SimpleGrid,
  Select,
  Paper,
  Radio,
  Group,
  Fieldset,
  Checkbox,
  Button,
  Flex,
  Notification,
} from "@mantine/core";
import { useContext, useState, useEffect } from "react";
import { EmployeesContext } from "../context/EmployeeContext";
import { schemes } from "../constants/Colors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployeesFn, createEmployeesFn } from "../api/employeeApi";
function EmployeeFields() {
  const [errors, setErrors] = useState([]);
  //   const queryClient = useQueryClient();
  const colors = ["green", "blue", "red", "default"];
  const queryClient = useQueryClient();
  const { employee, showFields, setShowFields, setEmployee } = useContext(EmployeesContext);
  const [title, setTitle] = useState("Save");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [salutation, setSalutation] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [grossSalary, setGrossSalary] = useState("0");
  const [profileColor, setProfileColor] =
    useState<keyof typeof schemes>("default");
  const padded = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const formattedValue = new Intl.NumberFormat().format(
      parseInt(numericValue, 10)
    );
    if (isNaN(parseInt(formattedValue))) {
      return "0";
    }
    return formattedValue.replace(/,/g, " ");
  };
  const createEmployeeMutation = useMutation({
    mutationFn: createEmployeesFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      reset();
      setShowFields(false);
      setEmployee(null);
    },
    onError: (error: any) => {
      setErrors(error?.response?.data?.errors);
    },
  });
  const updateEmployeeMutation = useMutation({
    mutationFn: updateEmployeesFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      reset();
      setShowFields(false);
      setEmployee(null);
    },
    onError: (error: any) => {
      setErrors(error?.response?.data?.errors);
    },
  });

  const editEmployee = (id: string, data: any) => {
    setErrors([]);
    // const gendersDict =
    //   {
    //     Dr: "Unspecified",
    //     Mr: "Male",
    //     Ms: "Female",
    //     Mrs: "Female",
    //     Mx: "Unspecified",
    //   }[salutation] || "Unspecified";
    // const id = employee?.id;
    // const data = {
    //   first_name: firstName,
    //   last_name: lastName,
    //   gender: gendersDict,
    //   salutation: salutation,
    //   gross_salary: parseInt(grossSalary.replace(" ", "")),
    //   profile_color: profileColor,
    //   employee_number: employeeNumber,
    // };
    // @ts-ignore
    updateEmployeeMutation.mutate({ id, data });
  };

  const handleAction = (title: string) => {
    const gendersDict =
      {
        Dr: "Unspecified",
        Mr: "Male",
        Ms: "Female",
        Mrs: "Female",
        Mx: "Unspecified",
      }[salutation] || "Unspecified";

    const data = {
      first_name: firstName,
      last_name: lastName,
      gender: gendersDict,
      salutation: salutation,
      gross_salary: parseInt(grossSalary.replace(" ", "")),
      profile_color: profileColor,
      employee_number: employeeNumber,
    };
    if (title === "Save") {
      setErrors([]);
      // @ts-ignore
      createEmployeeMutation.mutate(data);
      //   editEmployee();
    } else if (title === "Update") {
      const id = employee?.id;
      editEmployee(id, data);
    }
  };

  const reset = () =>{
    setFirstName("");
    setLastName("");
    setGender("");
    setSalutation("");
    setEmployeeNumber("");
    setGrossSalary("0");
    setProfileColor("default");
    setErrors([]);
    setShowFields(false);
    setEmployee(null);
  }
  useEffect(() => {
    if (employee) {
      setTitle("Update");
      setFirstName(employee?.first_name || "");
      setLastName(employee?.last_name || "");
      setGender(employee?.gender || "");
      setSalutation(
        employee?.salutation?.charAt(0)?.toUpperCase() +
          employee?.salutation?.slice(1)?.toLowerCase() || ""
      );
      setEmployeeNumber(employee?.employee_number?.toString() || "");
      setGrossSalary(employee?.gross_salary?.toString() || "");
      setProfileColor(employee?.profile_color || "default");
    }
  }, [employee]);

  return showFields || employee ? (
    <Fieldset legend="Employee Information">
      {errors.length > 0 &&
        errors.map((error: any, index: number) => (
          <Notification key={index} color="red" title={"Error"}>
            {error?.msg || ""}
          </Notification>
        ))}

      <Flex
        mih={50}
        gap="xl"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Button onClick={()=>reset()} color="red" variant="filled">
          Cancel
        </Button>
        <Button
          onClick={() => handleAction(title)}
          color={schemes[profileColor]}
          variant="filled"
        >
          {title}
        </Button>
      </Flex>

      <SimpleGrid cols={2} spacing={100}>
        <Paper>
          <TextInput
            onChange={(event) => setFirstName(event.currentTarget.value)}
            value={firstName}
            variant="filled"
            label="First Name(s)"
            withAsterisk
            placeholder=""
          />
          <TextInput
            onChange={(event) => setLastName(event.currentTarget.value)}
            value={lastName}
            variant="filled"
            label="Last Name"
            withAsterisk
            placeholder=""
          />
          <Select
            onChange={(_value, option) => {
              setSalutation(option.value);
            }}
            variant="filled"
            withAsterisk
            value={salutation}
            label="Salutation"
            placeholder="Salutation"
            data={["Dr", "Mr", "Ms", "Mrs", "Mx"]}
          />
          <Group mt={"xs"}>
            <Radio
              disabled
              checked={salutation === "Mr"}
              name="gender"
              label={"Male"}
              value={"MALE"}
              onChange={() => setGender(gender)}
            />
            <Radio
              disabled
              checked={salutation === "Mrs" || salutation === "Ms"}
              name="gender"
              label={"Female"}
              value={"FEMALE"}
              onChange={() => setGender(gender)}
            />
            <Radio
              disabled
              checked={salutation === "Dr" || salutation === "Mx"}
              name="gender"
              label={"Unspecified"}
              value={"UNSPECIFIED"}
              onChange={() => setGender(gender)}
            />
          </Group>
          <TextInput
            onChange={(event) => setEmployeeNumber(event.currentTarget.value)}
            value={employeeNumber}
            type="number"
            variant="filled"
            label="Employee #"
            withAsterisk
            placeholder=""
          />
        </Paper>
        <Paper>
          <TextInput
            disabled
            value={`${firstName} ${lastName}`}
            variant="filled"
            label="Full Name"
            placeholder=""
          />
          <TextInput
            onChange={(event) => setGrossSalary(event.currentTarget.value)}
            value={padded(grossSalary)}
            type="text"
            inputMode="numeric"
            variant="filled"
            label="Gross Salary $PY"
            withAsterisk
            placeholder=""
          />
          <Group mt="xs">
            {colors.map((color) => (
              <Checkbox
                onChange={() => {
                  setProfileColor(color as keyof typeof schemes);
                }}
                checked={profileColor.toLowerCase() === color.toLowerCase()}
                key={color}
                value={color}
                label={color.toUpperCase()}
              />
            ))}
          </Group>
        </Paper>
      </SimpleGrid>
    </Fieldset>
  ) : null;
}

export default EmployeeFields;
