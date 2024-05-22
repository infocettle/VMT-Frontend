import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Auth from "./pages/Auth/Auth";
import {
  Gender,
  PublicReg,
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
import Subscription from "./pages/Auth/Subscription/Subscription";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },

  {
    path:"/subscription",
    element:<Subscription />,
  },
  {
    path: "/public_reg",
    element: <PublicReg />,
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
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
