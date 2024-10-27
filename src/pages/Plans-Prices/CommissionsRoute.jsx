import { Outlet, useRoutes } from "react-router-dom";
import CommissionTypes from "./Commissions/Types";
import Commission from "./Commissions/Commission";

const Commissions = () => {
    const routes = useRoutes([
        { path:"types", element: <CommissionTypes /> },
        { path: "commission", element: <Commission /> }
    ])

    return routes || <Outlet/>
}

export default Commissions;