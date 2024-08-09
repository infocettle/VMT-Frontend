import { Outlet, useRoutes } from "react-router-dom";
import PoliciesDetails from "./PoliciesDetails";



const AccessControlRoute = () => {
  const routes = useRoutes([
    { path: "policies", element: <PoliciesDetails /> },
    { path: "modules", element: <PoliciesDetails /> },
    { path: "user_profiles", element: <PoliciesDetails /> },
    { path: "access", element: <PoliciesDetails /> },
   
  ]);

  return routes || <Outlet />;
};

export default AccessControlRoute;
