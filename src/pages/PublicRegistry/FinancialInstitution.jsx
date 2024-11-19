import { Outlet, useRoutes } from "react-router-dom";
import Banks from "./Banks";
import Type from "./Type";
import License from "./License";
import PensionFund from "./PensionFund";

const FinancialInstitution = () => {
  const routes = useRoutes([
    { path: "banks", element: <Banks /> },
    { path: "type", element: <Type /> },
    { path: "license", element: <License /> },
    { path: "pension_fund", element: <PensionFund /> },
  ]);

  return routes || <Outlet />;
};

export default FinancialInstitution;
