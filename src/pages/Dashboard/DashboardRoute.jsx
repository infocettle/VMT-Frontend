import { Outlet, useRoutes } from "react-router-dom";

import Overview from "./Overview";
import PerformanceDetails from "./Perfomance";

const DashboardRoute = () => {
  const routes = useRoutes([
    { path: "overview", element: <Overview /> },
    { path: "performance", element: <PerformanceDetails /> },
   
  ]);

  return routes || <Outlet />;
};

export default DashboardRoute;
