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
import { Profile } from "./pages/ProfileUpdate";

const queryClient = new QueryClient();

export const baseUrl = "https://vmt-server.onrender.com/api/";

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
    element: <Subscription />,
  },
  {
    path: "/",
    element: <System />,
  },
  {
    path: "/main-dashboard/*",
    element: <MainDashboard />,
    children: [
      // All children routes here
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
      // Add your children routes here
    ],
  },

  {
    path: "/profile-update",
    element: <Profile />,
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
