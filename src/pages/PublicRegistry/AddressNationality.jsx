import { Outlet, useRoutes } from "react-router-dom";
import Continent from "./Continent";
import Country from "./Country";
import Zone from "./Zone";
import State from "./State";
import LGA from "./LGA";

const AddressNationality = () => {
  const routes = useRoutes([
    { path: "continent", element: <Continent /> },
    { path: "country", element: <Country /> },
    { path: "zone", element: <Zone /> },
    { path: "state", element: <State /> },
    { path: "lga", element: <LGA /> },
    // { path: "ward", element: <Ward /> },
  ]);

  return routes || <Outlet />;
};

export default AddressNationality;
