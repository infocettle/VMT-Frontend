import { Outlet, useRoutes } from "react-router-dom";
import Group from "./Plans/Group";
import Plan from "./Plans/Plan";


const Plans = () => {
    const routes = useRoutes([
        { path:"group", element: <Group /> },
        { path: "plan", element: <Plan /> }
    ])

    return routes || <Outlet/>
}

export default Plans;