import { Outlet, useRoutes } from "react-router-dom";
import {
  IndividualPartnerProfile,
  IndividualSubscriberProfile,
  Profile,
} from ".";

const ProfilePath = () => {
  const routes = useRoutes([
    { path: "company-subscriber", element: <Profile /> },
    {
      path: "individual-subscriber",
      element: <IndividualSubscriberProfile />,
    },
    {
      path: "company-partner",
      element: <Profile />,
    },
    {
      path: "individual-partner",
      element: <IndividualPartnerProfile />,
    },
  ]);

  return routes || <Outlet />;
};

export default ProfilePath;
