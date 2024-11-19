import React, { useState } from "react";
import "../auth.css";
import AdminAuthOne from "../../../assets/img/AdminAuthOne.svg";
import AdminAuthTwo from "../../../assets/img/AdminAuthTwo.svg";
import AdminImageComponent from "./AdminImageComponent";
import AdminLogin from "./AdminLogin";
import AdminForgotPassword from "./AdminForgotPassword";

function AdminAuth() {
  const [formType, setFormType] = useState("admin-login");
  const handleSubmit = () => {
    console.log("Form submitted:", formType);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-overall-container">
        {formType === "admin-login" && (
          <AdminLogin setFormType={setFormType} onSubmit={handleSubmit} />
        )}
        {formType === "admin-forgot-password" && (
          <AdminForgotPassword setFormType={setFormType} onSubmit={handleSubmit} />
        )}
      </div>

      {formType === "admin-login" ? (
        <AdminImageComponent image={AdminAuthOne} />
      ) : (
        <AdminImageComponent image={AdminAuthTwo} />
      )}
    </div>
  );
}

export default AdminAuth;
