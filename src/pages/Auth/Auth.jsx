import React, { useState } from "react";
import "./auth.css";
import ImageComponent from "./ImageComponent";
import UserSignUp from "./SignUp/UserSignUp";
import UserSubscriberCompany from "./SignUp/UserSubscriberCompany";
import UserSubscriberIndividual from "./SignUp/UserSubscriberIndividual";
import UserSubscriber from "./SignUp/UserSubscriber";
import UserCreatePassword from "./SignUp/UserCreatePassword";
import UserLogin from "./Login/UserLogin";
import OTP from "./Login/OTP";
import Governance from "./Login/Governance";
import ResetPassword from "./Login/ResetPassword";
import VerifyEmail from "./Login/VerifyEmail";
import NewPassword from "./Login/NewPassword";
import UserCompanyCreatePassword from "./SignUp/UserCompanyCreatePassword";

function Auth() {
  const [formType, setFormType] = useState("signup");
  const [partnerType, setPartnerType] = useState("");
  const [userType, setUserType] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = () => {
    console.log("Form submitted:", formType);
  };

  console.log("user submitted:", userType);
  return (
    <div className="auth-container">
      <ImageComponent />
      <div className="auth-form-overall-container">
        {formType === "signup" && (
          <UserSignUp
            setFormType={setFormType}
            setPartnerType={setPartnerType}
            setUserType={setUserType}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "user-subscriber" && (
          <UserSubscriber
            setFormType={setFormType}
            userType={userType}
            
            onSubmit={handleSubmit}
          />
        )}
        {formType === "user-subscriber-individual" && (
          <UserSubscriberIndividual
            setFormType={setFormType}
            userType={userType}
            partnerType={partnerType}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "user-subscriber-company" && (
          <UserSubscriberCompany
            setFormType={setFormType}
            userType={userType}
            partnerType={partnerType}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "individual-create-password" && (
          <UserCreatePassword
            setFormType={setFormType}
            userType={userType}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "company-create-password" && (
          <UserCompanyCreatePassword
            setFormType={setFormType}
            userType={userType}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "login-user" && (
          <UserLogin
            setFormType={setFormType}
            userType={userType}
            onSubmit={handleSubmit}
            setUserEmail={setUserEmail}
          />
        )}
        {formType === "otp" && (
          <OTP
            setFormType={setFormType}
            userType={userType}
            userEmail={userEmail}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "governance-page" && (
          <Governance
            setFormType={setFormType}
            userType={userType}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "reset-password" && (
          <ResetPassword
            setFormType={setFormType}
            userType={userType}
            setUserEmail={setUserEmail}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "verify-email" && (
          <VerifyEmail
            setFormType={setFormType}
            userType={userType}
            userEmail={userEmail}
            onSubmit={handleSubmit}
          />
        )}
        {formType === "new-password" && (
          <NewPassword
            setFormType={setFormType}
            userType={userType}
            userEmail={userEmail}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default Auth;
