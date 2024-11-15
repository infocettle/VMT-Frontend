import { Outlet, useRoutes } from "react-router-dom";
import Types from "./Policies/Types";
import DetailTypes from "./components/DetailTypes";
import DetailUpdate from "./components/DetailUpdate";
import DetailRestrictions from "./components/DetailRestrictions";
import DetailAgreement from "./components/DetailAgreement";
import Update from "./Policies/Update";
import Restrictions from "./Policies/Restrictions";
import Agreement from "./Policies/Agreement";
import Groups from "./Modules/Groups";
import Modules from "./Modules/Modules";
import Processes from "./Modules/Processes";
import Functions from "./Modules/Functions";
import DetailGroups from "./components/DetailGroups";
import DetailModules from "./components/DetailModules";
import DetailFunction from "./components/DetailFunction";
import DetailProcesses from "./components/DetailProcesses";

const PoliciesDetails = () => {
  const routes = useRoutes([
    { path: "types", element: <Types /> },
    { path: "update", element: <Update /> },
    { path: "restrictions", element: <Restrictions /> },
    { path: "agreement", element: <Agreement /> },
    { path: "types/detail_types", element: <DetailTypes /> },
    { path: "update/detail_update", element: <DetailUpdate /> },
    {
      path: "restrictions/detail_restrictions",
      element: <DetailRestrictions />,
    },
    { path: "agreement/detail_agreement", element: <DetailAgreement /> },
    { path: "groups", element: <Groups /> },
    { path: "modules", element: <Modules /> },
    { path: "processes", element: <Processes /> },
    { path: "functions", element: <Functions /> },
    { path: "groups/detail_groups", element: <DetailGroups /> },
    { path: "modules/detail_modules", element: <DetailModules /> },
    { path: "functions/detail_functions", element: <DetailFunction /> },
    { path: "processes/detail_processes", element: <DetailProcesses /> },
  ]);

  return routes || <Outlet />;
};

export default PoliciesDetails;
