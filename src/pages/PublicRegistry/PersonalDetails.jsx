import { Outlet, useRoutes } from "react-router-dom";
import Title from "./Title";
import Gender from "./Gender";
import MaritalStatus from "./MaritalStatus";
import Relationship from "./Relationship";
import MedicalData from "./MedicalData";
import BodyData from "./BodyData";
import Qualification from "./Qualification";

const PersonalDetails = () => {
  const routes = useRoutes([
    { path: "title", element: <Title /> },
    { path: "gender", element: <Gender /> },
    { path: "marital_status", element: <MaritalStatus /> },
    { path: "relationship", element: <Relationship /> },
    { path: "medical_data", element: <MedicalData /> },
    { path: "body_data", element: <BodyData /> },
    { path: "qualification", element: <Qualification /> },
  ]);

  return routes || <Outlet />;
};

export default PersonalDetails;
