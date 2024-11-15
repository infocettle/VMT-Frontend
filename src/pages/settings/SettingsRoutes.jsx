import { Outlet, useRoutes } from "react-router-dom";
import GeneralSettings from "./general-settings/GeneralSettings";
import Segment from "./service-settings/segments/Segment";
import Contact from "./service-settings/contact/Contact";
import KYCDocument from "./service-settings/kyc-documents/KYCDocument";
import Template from "./service-settings/template/Template";
import ServiceStandard from "./service-settings/service-standard/ServiceStandard";
import Interactions from "./service-settings/interactions/Interactions";
import ControlGl from "./account-settings/control-gl/ControlGl";
import Income from "./account-settings/income/Income";
import FixedAssets from "./account-settings/fixed-assets/FixedAssets";
import Inventory from "./account-settings/inventory/Inventory";
import Expense from "./account-settings/expenses/Expenses";
import GeneralLedgers from "./account-settings/general-ledgers/GeneralLedger";
import SubsidiaryLedger from "./account-settings/subsidiary-ledger/SubsidiaryLedger";

const SettingsRoute = () => {
  const routes = useRoutes([
    { path: "general-settings", element: <GeneralSettings /> },
    { path: "segment", element: <Segment /> },
    { path: "contact", element: <Contact /> },
    { path: "kyc-document", element: <KYCDocument /> },
    { path: "templates", element: <Template /> },
    { path: "service-standard", element: <ServiceStandard /> },
    { path: "interaction", element: <Interactions /> },
    { path: "control-gl", element: <ControlGl /> },
    { path: "income", element: <Income /> },
    { path: "fixed-asset", element: <FixedAssets /> },
    { path: "inventory", element: <Inventory /> },
    { path: "expense", element: <Expense /> },
    { path: "general-ledgers", element: <GeneralLedgers /> },
    { path: "subsidiary-ledgers", element: <SubsidiaryLedger /> },
  ]);

  return routes || <Outlet />;
};

export default SettingsRoute;
