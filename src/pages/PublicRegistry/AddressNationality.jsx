import { Outlet, useRoutes } from "react-router-dom";
import { Ward, LGA, State, Zone, Country, Continent } from ".";

const AddressNationality = () => {
  const routes = useRoutes([
    { path: "continent", element: <Continent /> },
    { path: "country", element: <Country /> },
    { path: "zone", element: <Zone /> },
    { path: "state", element: <State /> },
    { path: "lga", element: <LGA /> },
    { path: "ward", element: <Ward /> },
  ]);

  return routes || <Outlet />;
};

export default AddressNationality;
