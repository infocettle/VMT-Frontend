import Dashboard from "@/pages/Dashboard/Dashboard";
import { PublicReg } from "@/pages/PublicRegistry";
import { ServiceItems } from "@/pages/Services";
import {  } from "@/pages/Services";

export const DashboardLinks = [
  {
    id: 1,
    name: "Dashboard",
    component: <Dashboard />,
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
];
