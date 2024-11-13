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

import IntegrationRoute from "./pages/Integration/IntegrationRoute";
import {
  Activation,
  Backup,
  Restore,
  // Recover,
  LockDomain,
  CancelDomain
} from "./pages/Maintenance";
import KYCVerification from "./pages/Services/KYC/KYCVerification";
import EditDocument from "./pages/Services/KYC/EditDocument";
import ViewContactKYC from "./pages/Services/KYC/ViewContactKYC";
import ServicesPayment from "./pages/Services/Payment";
import ViewContactPayment from "./pages/Services/Payment/ViewContactPayment";
import UpdateSubscription from "./pages/Services/Payment/UpgradeSubscription";
import RenewSubscription from "./pages/Services/Payment/RenewSubscription";
import Prospect from "./pages/Services/Prospect/index";
import NewProspect from "./pages/Services/Prospect/NewProspect";
import ServicesUpdate from "./pages/Services/Contacts/Update";
import UpdateDetails from "./pages/Services/Contacts/Update/UpdateDetails";
import ServicesMessage from "./pages/Services/Contacts/Message";
import ServicesDashboard from "./pages/Services/Contacts/Dashboard";
import ContactRequestTypes from "./pages/Services/Support";
import ServiceLevelAgreement from "./pages/Services/Support/Service-Level-Agreement";
import ServiceKPI from "./pages/Services/Support/kpi";
import ServiceRequests from "./pages/Services/Support/Request";
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

import {
  Hardware,
  Software,
  ThirdParties,
  Regulators,
  TaxAuthorities,
  Others
} from "./pages/Integration";
import { UserProfilesLinks } from "./texts/accessControlLinks";
import UserGroups from "./pages/AccessControl/UserProfiles/UserGroups";
import UserProfileDetails from "./pages/AccessControl/UserProfileDetails";
import UserTypes from "./pages/AccessControl/UserProfiles/UserTypes";
import UserRoles from "./pages/AccessControl/UserProfiles/UserRoles";
import UserPrivilege from "./pages/AccessControl/UserProfiles/UserPrivilege";
import UserUsers from "./pages/AccessControl/UserProfiles/UserUsers";
import DetailUserGroups from "./pages/AccessControl/components/DetailUserGroups";
import DetailUserTypes from "./pages/AccessControl/components/DetailUserTypes";
import DetailUserPrivilege from "./pages/AccessControl/components/DetailUserPrivilege";
import DetailUserUsers from "./pages/AccessControl/components/DetailUserUsers";
import DetailUserRoles from "./pages/AccessControl/components/DetailUserRoles";
import AccessDetails from "./pages/AccessControl/AccessDetails";
import AccessSettings from "./pages/AccessControl/Access/AccessSettings";
import AccessPasswordChange from "./pages/AccessControl/Access/AccessPasswordChange";
import AccessAuth from "./pages/AccessControl/Access/AccessAuth";
import DetailAccessSettings from "./pages/AccessControl/components/DetailAccessSettings";
import DetailAccessAuth from "./pages/AccessControl/components/DetailAccessAuth";
import DetailAccessPasswordChange from "./pages/AccessControl/components/DetailAccessPasswordChange";
import PlansPricesRoute from "./pages/Plans-Prices/PlansPricesRoute";
import Plans from "./pages/Plans-Prices/PlansRoute";
import { Charges, ChargesTypes, Commission, CommissionTypes, Differentiators, Discounts, DiscountTypes, Group, Plan, ServiceListing } from "./pages/Plans-Prices";
import Discount from "./pages/Plans-Prices/DiscountRoute";
import Charge from "./pages/Plans-Prices/ChargesRoute";
import Commissions from "./pages/Plans-Prices/CommissionsRoute";

const queryClient = new QueryClient();

export const baseUrl =  "https://vmt-server.onrender.com/api/v1/";  //for local development: "http://localhost:3000/api/v1/";
export const baseUrlTrial = "https://vnt-domie.onrender.com";

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
    element:(<Subscription />) ,
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
              { path: "business-kpi", element: <BusinessKpiPerformance /> },
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
          {
            path: "user_profiles/*",
            element: <UserProfileDetails />,
            children: [
              {
                path: "",
                element: <UserGroups />,

              },
              {
                path: "groups",
                element: <UserGroups />,
                
              },
              {
                path: "types",
                element: <UserTypes />,
                
              },
              {
                path: "roles",
                element: <UserRoles />,
                
              },
              {
                path: "privilege",
                element: <UserPrivilege />,
                
              },
              {
                path: "users",
                element: <UserUsers />,
                
              },
              { path: "groups/detail_groups", element: <DetailUserGroups/> },
              { path: "types/detail_types", element: <DetailUserTypes /> },
              { path: "privilege/detail_privilege", element: <DetailUserPrivilege /> },
              { path: "users/detail_users", element: <DetailUserUsers /> },
              { path: "roles/detail_roles", element: <DetailUserRoles /> },
         
             
            ],
          },
          {
            path: "access/*",
            element: <AccessDetails />,
            children: [
              {
                path: "",
                element: <AccessSettings />,

              },
              { path: "settings", element: <AccessSettings /> },
              { path: "login_logout", element: <AccessAuth /> },
              { path: "password_change", element: <AccessPasswordChange /> },
          
              { path: "settings/detail_settings", element: <DetailAccessSettings /> },
              { path: "login_logout/detail_login_logout", element: <DetailAccessAuth /> },
              { path: "password_change/detail_password_change", element: <DetailAccessPasswordChange /> },
             
         
             
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
                path: "documentinformation",
                element: <EditDocument />,
              },
              {
                path: "viewcontactkyc",
                element: <ViewContactKYC />,
              },
              {
                path: "registration",
                element: <ContactRegistration />,
              },
              {
                path: "registrationdetails",
                element: <RegistrationDetails />,
              },
              {
                path: "kycverification",
                element: <KYCVerification />,
              },
              {
                path: "payments",
                element: <ServicesPayment />,
              },
              {
                path: "viewcontactpayments",
                element: <ViewContactPayment />,
              },
              {
                path: "updatesubscription",
                element: <UpdateSubscription />,
              },
              {
                path: "renewsubscription",
                element: <RenewSubscription />,
              },
              {
                path: "update",
                element: <ServicesUpdate />,
              },
              {
                path: "updatedetails",
                element: <UpdateDetails />,
              },
              {
                path: "message",
                element: <ServicesMessage />,
              },
              {
                path: "dashboard",
                element: <ServicesDashboard />,
              },
            ],
          },
          {
            path: "prospects",
            element: <Prospect />,
          },
          {
            path: "newprospect",
            element: <NewProspect />,
          },
          {
            path: "support/*",
            children: [
              {
                path: "requesttypes",
                element: <ContactRequestTypes />,
              },
              {
                path: "service-level-agreement",
                element: <ServiceLevelAgreement />,
              },
              {
                path: "kpi",
                element: <ServiceKPI />,
              },
              {
                path: "requests",
                element: <ServiceRequests />,
              },
            ],
          },
        ],
      },
      {
        path: "maintenance/*",
        element: <MaintenanceRoute />,
        children: [
          {
            path: "activation",
            element: <Activation />,
          },
          {
            path: "backup",
            element: <Backup />,
          },
          {
            path: "restore",
            element: <Restore />,
          },
          // {
          //   path: "recover",
          //   element: <Recover />,
          // },
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
      {
        path: 'integration/*',
        element: <IntegrationRoute/>,
        children: [
          {
            path: "software",
            element: <Software/>,
          },
          {
            path: "hardware",
            element: <Hardware/>,
          },
          {
            path: "third-parties/*",
            element: <ThirdParties/>,
            children: [
              {
                path: "regulators",
                element: <Regulators/>,
              },
              {
                path: "tax-authorities",
                element: <TaxAuthorities/>,
              },
              {
                path: "others",
                element: <Others/>
              }
            ]
          }
        ]
      },
      {
        path: 'plans_prices/*',
        element: <PlansPricesRoute/>,
        children: [
          {
            path: 'plans/*',
            element: <Plans/>,
            children: [
              {
                path: 'group',
                element: <Group/>
              },
              {
                path: 'plan',
                element: <Plan/>
              }
            ]
          },
          {
            path: 'discount/*',
            element: <Discount/>,
            children: [
              {
                path: 'types',
                element: <DiscountTypes/>
              },
              {
                path: 'discounts',
                element: <Discounts/>
              }
            ]
          },
          {
            path: 'charges/*',
            element: <Charge/>,
            children: [
              {
                path: 'types',
                element: <ChargesTypes/>
              },
              {
                path: 'charge',
                element: <Charges/>
              }
            ]
          },
          {
            path: 'commissions/*',
            element: <Commissions/>,
            children: [
              {
                path: 'types',
                element: <CommissionTypes/>
              },
              {
                path: 'commission',
                element: <Commission/>
              }
            ]
          },
          {
            path: 'differentiators',
            element: <Differentiators/>
          },
          {
            path: 'service_listing',
            element: <ServiceListing/>
          }
        ]
      }
      // Add your children routes here
    ],
  },

  {
    path: "/profile/*",
    element: (
      <ProtectedRoute>
        <ProfilePath />
      </ProtectedRoute>
    ),
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
