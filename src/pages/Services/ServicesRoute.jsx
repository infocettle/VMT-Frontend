import { Outlet, useRoutes } from "react-router-dom";

import ContactType from "./Contacts/Type";
import NewType from "./Contacts/NewType";

const ServicesRoute = () => {
    const routes = useRoutes([
        { path: "type", element: <ContactType /> },
        { path: "type/newtype", element: <NewType /> },

    ]);

    return routes || <Outlet />;
};

export default ServicesRoute;
