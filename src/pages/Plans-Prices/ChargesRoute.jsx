import { Outlet, useRoutes } from "react-router-dom";
import ChargesTypes from "./Charges/Types";
import Charges from "./Charges/Charges";

const Charge = () => {
    const routes = useRoutes([
        { path:"types", element: <ChargesTypes /> },
        { path: "charge", element: <Charges /> }
    ])

    return routes || <Outlet/>
}

export default Charge;