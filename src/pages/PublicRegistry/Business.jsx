import { Outlet, useRoutes } from "react-router-dom";
import { Sectors, SubSectors } from ".";

const Business = () => {
  const routes = useRoutes([
    { path: "sectors", element: <Sectors /> },
    { path: "sub_sectors", element: <SubSectors /> },
  ]);

  return routes || <Outlet />;
};

export default Business;
