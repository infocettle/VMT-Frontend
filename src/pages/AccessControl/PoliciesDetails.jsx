import { Outlet, useRoutes } from "react-router-dom";
import Types from "./Types";




const PoliciesDetails = () => {
  const routes = useRoutes([
    { path: "types", element: <Types /> },
    { path: "update", element: <Types /> },
    { path: "restrictions", element: <Types /> },
    { path: "agreement", element: <Types /> },
  
  
  ]);

  return routes || <Outlet />;
};

export default PoliciesDetails;