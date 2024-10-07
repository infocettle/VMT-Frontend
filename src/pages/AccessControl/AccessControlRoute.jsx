import { Outlet, useRoutes } from "react-router-dom";
import PoliciesDetails from "./PoliciesDetails";
import ModulesDetails from "./ModulesDetails";
import AccessDetails from "./AccessDetails";
import UserProfileDetails from "./UserProfileDetails";



const AccessControlRoute = () => {
  const routes = useRoutes([
    { path: "policies", element: <PoliciesDetails /> },
    { path: "modules", element: <ModulesDetails /> },
    { path: "user_profiles", element: <UserProfileDetails /> },
    { path: "access", element: <AccessDetails /> },
   
  ]);

  return routes || <Outlet />;
};

export default AccessControlRoute;
