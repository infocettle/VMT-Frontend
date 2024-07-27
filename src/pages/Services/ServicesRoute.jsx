import { Outlet, useRoutes } from "react-router-dom";

import ContactType from "./Contacts/Type";

const ServicesRoute = () => {
    const routes = useRoutes([
        { path: "type", element: <ContactType /> },

    ]);

    return routes || <Outlet />;
};

export default ServicesRoute;
