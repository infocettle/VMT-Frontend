import { Outlet, useRoutes } from "react-router-dom";

import Groups from "./Modules/Groups";
import Modules from "./Modules/Modules";
import Processes from "./Modules/Processes";
import Functions from "./Modules/Functions";
import DetailGroups from "./components/DetailGroups";
import DetailModules from "./components/DetailModules";
import DetailFunction from "./components/DetailFunction";
import DetailProcesses from "./components/DetailProcesses";




const ModulesDetails = () => {
  const routes = useRoutes([
  
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

export default ModulesDetails;