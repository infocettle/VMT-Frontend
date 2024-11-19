import { Outlet, useRoutes } from "react-router-dom";
import { Hardware, Software, ThirdParties } from ".";

const IntegrationRoute = () => {
  const routes = useRoutes([
    { path: "hardware", element: <Hardware /> },
    { path: "software", element: <Software /> },
    { path: "third-parties", element: <ThirdParties /> },
  ]);

  return routes || <Outlet />;
};

export default IntegrationRoute;
