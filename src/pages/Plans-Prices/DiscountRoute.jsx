import { Outlet, useRoutes } from "react-router-dom";
import DiscountTypes from "./Discount/Types";
import Discounts from "./Discount/Discounts";

const Discount = () => {
    const routes = useRoutes([
        { path:"types", element: <DiscountTypes /> },
        { path: "discounts", element: <Discounts /> }
    ])

    return routes || <Outlet/>
}

export default Discount;