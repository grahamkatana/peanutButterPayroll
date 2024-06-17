import React from "react";
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
} from "@mantine/core";
function EmployeeFields() {
  return (
    <Fieldset legend="Employee Information">
      <Flex
        mih={50}
        gap="xl"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Button color="red" variant="filled">
          Cancel
        </Button>
        <Button variant="filled">Save</Button>
      </Flex>

      <SimpleGrid cols={2} spacing={100}>
        <Paper>
          <TextInput
            variant="filled"
            label="First Name(s)"
            withAsterisk
            placeholder=""
          />
          <TextInput
            variant="filled"
            label="Last Name"
            withAsterisk
            placeholder=""
          />
          <Select
            variant="filled"
            withAsterisk
            label="Salutation"
            placeholder="Salutation"
            data={["Dr", "Mr", "Ms", "Mrs", "Mx"]}
          />
          <Radio.Group label="Gender" withAsterisk variant="filled">
            <Group mt={"xs"}>
              <Radio disabled label="Male" value="MALE" />
              <Radio disabled label="Female" value="FEMALE" />
              <Radio disabled label="Unspecified" value="UNSPECIFIED" />
            </Group>
          </Radio.Group>
          <TextInput
            type="number"
            variant="filled"
            label="Employee #"
            withAsterisk
            placeholder=""
          />
        </Paper>
        <Paper>
          <TextInput variant="filled" label="Full Name" placeholder="" />
          <TextInput
            type="number"
            variant="filled"
            label="Gross Salary $PY"
            withAsterisk
            placeholder=""
          />
          <Checkbox.Group
            defaultValue={["react"]}
            label="Employee Profile Colour"
          >
            <Group mt="xs">
              <Checkbox value="green" label="Green" />
              <Checkbox value="blue" label="Blue" />
              <Checkbox value="red" label="Red" />
              <Checkbox checked value="default" label="Default" />
            </Group>
          </Checkbox.Group>
        </Paper>
      </SimpleGrid>
    </Fieldset>
  );
}

export default EmployeeFields;
