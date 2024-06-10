import { Outlet, useRoutes } from "react-router-dom";
import { IndividualSubscriberProfile, Profile } from ".";

const ProfilePath = () => {
  const routes = useRoutes([
    { path: "company-subscriber", element: <Profile /> },
    {
      path: "individual-subscriber",
      element: <IndividualSubscriberProfile />,
    },
    // { path: "license", element: <License /> },
    // { path: "pension_fund", element: <PensionFund /> },
  ]);

  return routes || <Outlet />;
};

export default ProfilePath;
