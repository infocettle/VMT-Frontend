import { Outlet, useRoutes } from "react-router-dom";
import { Regulators, TaxAuthorities, Others } from ".";

const ThirdParties = () => {
  const routes = useRoutes([
    {path: "regulators", element: <Regulators/>},
    {path: "tax-authorities", element: <TaxAuthorities/>},
    {path: "others", element: <Others/>}
  ])

  return routes || <Outlet/>
}

export default ThirdParties;
