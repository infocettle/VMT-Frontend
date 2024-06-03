import { Outlet, useRoutes } from "react-router-dom";
import {
  AddressNationality,
  Business,
  Currency,
  FinancialInstitution,
  PersonalDetails,
  TaxAuthority,
} from ".";

const PublicRoute = () => {
  const routes = useRoutes([
    { path: "personal_details", element: <PersonalDetails /> },
    { path: "address_nationality", element: <AddressNationality /> },
    { path: "financial_institution", element: <FinancialInstitution /> },
    { path: "business", element: <Business /> },
    { path: "tax_authority", element: <TaxAuthority /> },
    { path: "currency", element: <Currency /> },
  ]);

  return routes || <Outlet />;
};

export default PublicRoute;
