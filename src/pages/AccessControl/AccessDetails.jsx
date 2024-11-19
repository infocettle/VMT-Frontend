import { Outlet, useRoutes } from "react-router-dom";


import AccessSettings from "./Access/AccessSettings";
import AccessAuth from "./Access/AccessAuth";
import AccessPasswordChange from "./Access/AccessPasswordChange";
import DetailAccessSettings from "./components/DetailAccessSettings";
import DetailAccessAuth from "./components/DetailAccessAuth";
import DetailAccessPasswordChange from "./components/DetailAccessPasswordChange";




const AccessDetails = () => {
  const routes = useRoutes([
  
    { path: "settings", element: <AccessSettings /> },
    { path: "login_logout", element: <AccessAuth /> },
    { path: "password_change", element: <AccessPasswordChange /> },

    { path: "settings/detail_settings", element: <DetailAccessSettings /> },
    { path: "login_logout/detail_login_logout", element: <DetailAccessAuth /> },
    { path: "password_change/detail_password_change", element: <DetailAccessPasswordChange /> },
   
  
  
  ]);

  return routes || <Outlet />;
};

export default AccessDetails;