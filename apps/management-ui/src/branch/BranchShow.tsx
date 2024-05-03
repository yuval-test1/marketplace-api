import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BRANCH_TITLE_FIELD } from "./BranchTitle";

export const BranchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <TextField label="numberOfEmployees" source="numberOfEmployees" />
        <ReferenceManyField
          reference="Employee"
          target="branchId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="firstName" source="firstName" />
            <TextField label="salary" source="salary" />
            <TextField label="lastName" source="lastName" />
            <TextField label="position" source="position" />
            <ReferenceField
              label="branch"
              source="branch.id"
              reference="Branch"
            >
              <TextField source={BRANCH_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
