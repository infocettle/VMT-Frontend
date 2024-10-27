import { Outlet, useRoutes } from "react-router-dom";

import UserGroups from "./UserProfiles/UserGroups";
import UserTypes from "./UserProfiles/UserTypes";
import UserRoles from "./UserProfiles/UserRoles";
import UserPrivilege from "./UserProfiles/UserPrivilege";
import UserUsers from "./UserProfiles/UserUsers";
import DetailUserGroups from "./components/DetailUserGroups";
import DetailUserTypes from "./components/DetailUserTypes";
import DetailUserPrivilege from "./components/DetailUserPrivilege";
import DetailUserUsers from "./components/DetailUserUsers";
import DetailUserRoles from "./components/DetailUserRoles";




const UserProfileDetails = () => {
  const routes = useRoutes([
  
    { path: "groups", element: <UserGroups /> },
    { path: "types", element: <UserTypes /> },
    { path: "roles", element: <UserRoles /> },
    { path: "privilege", element: <UserPrivilege /> },
    { path: "users", element: <UserUsers /> },

    { path: "groups/detail_groups", element: <DetailUserGroups /> },
    { path: "types/detail_types", element: <DetailUserTypes /> },
    { path: "privilege/detail_privilege", element: <DetailUserPrivilege /> },
    { path: "users/detail_users", element: <DetailUserUsers /> },
    { path: "roles/detail_roles", element: <DetailUserRoles /> },
  
  
  ]);

  return routes || <Outlet />;
};

export default UserProfileDetails;