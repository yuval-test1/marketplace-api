import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { ComplaintList } from "./complaint/ComplaintList";
import { ComplaintCreate } from "./complaint/ComplaintCreate";
import { ComplaintEdit } from "./complaint/ComplaintEdit";
import { ComplaintShow } from "./complaint/ComplaintShow";
import { RentalList } from "./rental/RentalList";
import { RentalCreate } from "./rental/RentalCreate";
import { RentalEdit } from "./rental/RentalEdit";
import { RentalShow } from "./rental/RentalShow";
import { CustomerServiceList } from "./customerService/CustomerServiceList";
import { CustomerServiceCreate } from "./customerService/CustomerServiceCreate";
import { CustomerServiceEdit } from "./customerService/CustomerServiceEdit";
import { CustomerServiceShow } from "./customerService/CustomerServiceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Customer Interaction Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Complaint"
          list={ComplaintList}
          edit={ComplaintEdit}
          create={ComplaintCreate}
          show={ComplaintShow}
        />
        <Resource
          name="Rental"
          list={RentalList}
          edit={RentalEdit}
          create={RentalCreate}
          show={RentalShow}
        />
        <Resource
          name="CustomerService"
          list={CustomerServiceList}
          edit={CustomerServiceEdit}
          create={CustomerServiceCreate}
          show={CustomerServiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
