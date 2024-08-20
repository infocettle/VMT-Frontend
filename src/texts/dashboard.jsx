

import Dashboard from "@/pages/Dashboard/Dashboard";
import { PublicReg } from "@/pages/PublicRegistry";
import { Maintenance } from "@/pages/Maintenance";
import { Integration } from "@/pages/Integration";
import { ServiceItems } from "@/pages/Services";
import AccessControl from "@/pages/AccessControl/AccessControl";

export const DashboardLinks = [
  {
    id: 1,
    name: "Dashboard",
    component: <Dashboard />,
  },
  {
    id: 4,
    name: "Access Control",
    component: <AccessControl />,
  },
  {
    id: 4,
    name: "Access Control",
    component: <AccessControl />,
  },
  {
    id: 5,
    name: "Public Registry",
    component: <PublicReg />,
  },
  {
    id: 6,
    name: "Services",
    component: <ServiceItems />,
  },
  {
    id: 6,
    name: "Services",
    component: <ServiceItems />,
  },
  {
    id: 8,
    name: "Maintenance",
    component: <Maintenance />,
  },
  {
    id: 9,
    name: "Integration",
    component: <Integration />,
  },
  // {
  //   id: 6,
  //   name: "Services",
  //   component: <PublicReg />,
  // },
  
];
