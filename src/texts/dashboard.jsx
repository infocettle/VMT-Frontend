
import Dashboard from "@/pages/Dashboard/Dashboard";
import { PublicReg } from "@/pages/PublicRegistry";
import { Maintenance } from "@/pages/Maintenance";
import { ServiceItems } from "@/pages/Services";
import AccessControl from "@/pages/AccessControl/AccessControl";
import PlansPrices from "@/pages/Plans-Prices/PlansPrices";

export const DashboardLinks = [
  {
    id: 1,
    name: "Dashboard",
    component: <Dashboard />,
  },
  {
    id: 3,
    name: "Plans & Prices",
    component: <PlansPrices/>
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
    id: 8,
    name: "Maintenance",
    component: <Maintenance />,
  },
  
];
