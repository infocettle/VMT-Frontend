import { Outlet, useRoutes } from "react-router-dom";
import GeneralPerfomance from "./GeneralPerfomance";
import BusinessKpiPerformance from "./BusinessKpiPerformance";
import SalesPerformance from "./SalesPerformance";
import CommissionPerformance from "./CommissionPerformance";
import CompanyPerformance from "./CompanyPerformance";
import PartnersPerformance from "./PartnersPerformance";
import SupportServicePerformance from "./SupportServicePerformance";



const PerformanceDetails = () => {
  const routes = useRoutes([
    { path: "general", element: <GeneralPerfomance /> },
    { path: "business-kpi", element: <BusinessKpiPerformance /> },
    { path: "sales", element: <SalesPerformance /> },
    { path: "commission", element: <CommissionPerformance /> },
    { path: "company", element: <CompanyPerformance/> },
    { path: "partners", element: <PartnersPerformance /> },
    { path: "support-service", element: <SupportServicePerformance /> },
  
  ]);

  return routes || <Outlet />;
};

export default PerformanceDetails;
