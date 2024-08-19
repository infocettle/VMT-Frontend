import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Subscription from "./pages/Auth/Subscription/Subscription";
import AdminAuth from "./pages/Auth/Admin/Admin";
import AdminAuthUser from "./pages/Auth/Admin/AdminUser";
import MainDashboard from "./pages/MainDashboard/MainDashboard";
import {
  Gender,
  Title,
  Currency,
  MaritalStatus,
  PersonalDetails,
  AddressNationality,
  Relationship,
  MedicalData,
  BodyData,
  Qualification,
  Continent,
  Country,
  Zone,
  State,
  LGA,
  Ward,
  FinancialInstitution,
  Type,
  License,
  PensionFund,
  Banks,
  TaxAuthority,
  Business,
  Sectors,
  SubSectors,
} from "./pages/PublicRegistry";
import PublicRoute from "./pages/PublicRegistry/PublicRoute";
import System from "./pages/System/System";
import { Provider } from "react-redux";
import store, { persistor } from "./pages/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  IndividualPartnerProfile,
  IndividualSubscriberProfile,
  Profile,
  ProfilePath,
} from "./pages/ProfileUpdate";
import Overview from "./pages/Dashboard/Overview";
import GeneralPerfomance from "./pages/Dashboard/GeneralPerfomance";
import DashboardRoute from "./pages/Dashboard/DashboardRoute";
import PerformanceDetails from "./pages/Dashboard/Perfomance";
import BusinessKpiPerformance from "./pages/Dashboard/BusinessKpiPerformance";
import SalesPerformance from "./pages/Dashboard/SalesPerformance";
import CommissionPerformance from "./pages/Dashboard/CommissionPerformance";
import CompanyPerformance from "./pages/Dashboard/CompanyPerformance";
import PartnersPerformance from "./pages/Dashboard/PartnersPerformance";
import SupportServicePerformance from "./pages/Dashboard/SupportServicePerformance";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import MaintenanceRoute from "./pages/Maintenance/MaintenanceRoute";
import ContactType from "./pages/Services/Contacts/Type";
import NewType from "./pages/Services/Contacts/NewType";
import ContactRegistration from "./pages/Services/Contacts/Registration";
import ServicesRoute from "./pages/Services/ServicesRoute";
import RegistrationDetails from "./pages/Services/Contacts/RegistrationDetails";


import { 
  Activation,
  Backup,
  Restore,
  Recover,
  LockDomain,
  CancelDomain
} from "./pages/Maintenance";
import AccessControlRoute from "./pages/AccessControl/AccessControlRoute";
import PoliciesDetails from "./pages/AccessControl/PoliciesDetails";
import Types from "./pages/AccessControl/Policies/Types";
import DetailTypes from "./pages/AccessControl/components/DetailTypes";
import DetailUpdate from "./pages/AccessControl/components/DetailUpdate";
import DetailRestrictions from "./pages/AccessControl/components/DetailRestrictions";
import DetailAgreement from "./pages/AccessControl/components/DetailAgreement";
import Update from "./pages/AccessControl/Policies/Update";
import Restrictions from "./pages/AccessControl/Policies/Restrictions";
import Agreement from "./pages/AccessControl/Policies/Agreement";
import ModulesDetails from "./pages/AccessControl/ModulesDetails";
import Groups from "./pages/AccessControl/Modules/Groups";
import Modules from "./pages/AccessControl/Modules/Modules";
import Functions from "./pages/AccessControl/Modules/Functions";
import Processes from "./pages/AccessControl/Modules/Processes";
import DetailGroups from "./pages/AccessControl/components/DetailGroups";
import DetailModules from "./pages/AccessControl/components/DetailModules";
import DetailFunction from "./pages/AccessControl/components/DetailFunction";
import DetailProcesses from "./pages/AccessControl/components/DetailProcesses";


const queryClient = new QueryClient();

export const baseUrl = "https://vmt-server.onrender.com/api/v1/";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/admin",
    element: <AdminAuth />,
  },
  {
    path: "/admin-user",
    element: <AdminAuthUser />,
  },

  {
    path: "/subscription",
    element:(<ProtectedRoute><Subscription /></ProtectedRoute>) ,
  },

  {
    path: "/",
    element:<ProtectedRoute>
    <MainDashboard />
  </ProtectedRoute>,
    children: [
      // All children routes here
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "dashboard/*",
        element: <DashboardRoute />,
        children: [
          {
            path: "",
            element: <Overview />,
          },
          {
            path: "performance/*",
            element: <PerformanceDetails />,
            children: [
              {
                path: "",
                element: <GeneralPerfomance />,
              },
              {
                path: "general",
                element: <GeneralPerfomance />,
              },
              { path: "business-kpi", element: <BusinessKpiPerformance/> },
              { path: "sales", element: <SalesPerformance /> },
              { path: "commission", element: <CommissionPerformance /> },
              { path: "company", element: <CompanyPerformance /> },
              { path: "partners", element: <PartnersPerformance /> },
              {
                path: "support-service",
                element: <SupportServicePerformance />,
              },
            ],
          },
          {
            path: "overview",
            element: <Overview />,
          },
        ],
      },
      {
        path: "access_control/*",
        element: <AccessControlRoute />,
        children: [
    
          {
            path: "policies/*",
            element: <PoliciesDetails />,
            children: [
              {
                path: "",
                element: <Types />,

              },
              {
                path: "types",
                element: <Types />,
                
              },
              {
                path: "update",
                element: <Update />,
                
              },
              {
                path: "restrictions",
                element: <Restrictions />,
                
              },
              {
                path: "agreement",
                element: <Agreement />,
                
              },
              {
                path: "detail_types",
                element: <DetailTypes />,
              },
              {
                path: "detail_update",
                element: <DetailUpdate />,
              },
              {
                path: "detail_restrictions",
                element: <DetailRestrictions />,
              },
              {
                path: "detail_agreement",
                element: <DetailAgreement />,
              },
              { path: "update", element: <Types/> },
              { path: "restrictions", element: <Types /> },
              { path: "agreement", element: <Types /> },
             
            ],
          },
          {
            path: "modules/*",
            element: <ModulesDetails />,
            children: [
              {
                path: "",
                element: <Groups />,

              },
              {
                path: "groups",
                element: <Groups />,
                
              },
              {
                path: "modules",
                element: <Modules />,
                
              },
              {
                path: "functions",
                element: <Functions />,
                
              },
              {
                path: "processes",
                element: <Processes />,
                
              },
              {
                path: "detail_groups",
                element: <DetailGroups />,
              },
              {
                path: "detail_modules",
                element: <DetailModules />,
              },
              {
                path: "detail_functions",
                element: <DetailFunction />,
              },
              {
                path: "detail_processes",
                element: <DetailProcesses />,
              },
         
             
            ],
          },
         
        ],
      },
      {
        path: "public_reg/*",
        element: <PublicRoute />,
        children: [
          {
            path: "personal_details/*",
            element: <PersonalDetails />,
            children: [
              {
                path: "",
                element: <Title />,
              },
              {
                path: "title",
                element: <Title />,
              },
              {
                path: "gender",
                element: <Gender />,
              },
              {
                path: "marital_status",
                element: <MaritalStatus />,
              },
              {
                path: "relationship",
                element: <Relationship />,
              },
              {
                path: "medical_data",
                element: <MedicalData />,
              },
              {
                path: "body_data",
                element: <BodyData />,
              },
              {
                path: "qualification",
                element: <Qualification />,
              },
            ],
          },
          {
            path: "currency",
            element: <Currency />,
          },
          {
            path: "address_nationality/*",
            element: <AddressNationality />,
            children: [
              {
                path: "",
                element: <Continent />,
              },
              {
                path: "continent",
                element: <Continent />,
              },
              {
                path: "country",
                element: <Country />,
              },
              {
                path: "zone",
                element: <Zone />,
              },
              {
                path: "state",
                element: <State />,
              },
              {
                path: "lga",
                element: <LGA />,
              },
              {
                path: "ward",
                element: <Ward />,
              },
            ],
          },
          {
            path: "financial_institution/*",
            element: <FinancialInstitution />,
            children: [
              {
                path: "",
                element: <Banks />,
              },
              {
                path: "banks",
                element: <Banks />,
              },
              {
                path: "type",
                element: <Type />,
              },
              {
                path: "license",
                element: <License />,
              },
              {
                path: "pension_fund",
                element: <PensionFund />,
              },
            ],
          },
          {
            path: "tax_authority",
            element: <TaxAuthority />,
          },
          {
            path: "business/*",
            element: <Business />,
            children: [
              {
                path: "",
                element: <Sectors />,
              },
              {
                path: "sectors",
                element: <Sectors />,
              },
              {
                path: "sub_sectors",
                element: <SubSectors />,
              },
            ],
          },
        ],
      },
      {
        path: "services/*",
        element: <ServicesRoute />,
        children: [
          {
            path: "contacts/*",
            children: [
              {
                path: "type",
                element: <ContactType />,
              },
              {
                path: "newtype",
                element: <NewType />,
              },
              {
                path: "registration",
                element: <ContactRegistration />,
              },
              {
                path: "registrationdetails",
                element: <RegistrationDetails />,
              }

            ],
          },
        ],
      },
      {
        path: 'maintenance/*',
        element: <MaintenanceRoute/>,
        children: [
          {
            path: 'activation',
            element: <Activation/>
          },
          {
            path: "backup",
            element: <Backup/>,
          },
          {
            path: "restore",
            element: <Restore/>,
          },
          {
            path: "recover",
            element: <Recover/>
          },
          {
            path: 'lock_domain',
            element: <LockDomain/>
          },
          {
            path: "cancel_domain",
            element: <CancelDomain/>
          }
        ]
      },
      // Add your children routes here
    ],
  },

  {
    path: "/profile/*",
    element:  <ProtectedRoute>
    <ProfilePath />
  </ProtectedRoute>,
    children: [
      {
        path: "company-subscriber",
        element: <Profile />,
      },
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
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
