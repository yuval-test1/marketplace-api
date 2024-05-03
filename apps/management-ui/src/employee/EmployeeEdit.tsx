import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalaryTitle } from "../salary/SalaryTitle";
import { BranchTitle } from "../branch/BranchTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <NumberInput label="salary" source="salary" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="position" source="position" />
        <ReferenceArrayInput
          source="salaries"
          reference="Salary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalaryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="branch.id" reference="Branch" label="branch">
          <SelectInput optionText={BranchTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
