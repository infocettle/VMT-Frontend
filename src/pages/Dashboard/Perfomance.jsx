import { Outlet, useRoutes } from "react-router-dom";
import GeneralPerfomance from "./GeneralPerfomance";



const PerformanceDetails = () => {
  const routes = useRoutes([
    { path: "general", element: <GeneralPerfomance /> },
  
  ]);

  return routes || <Outlet />;
};

export default PerformanceDetails;
