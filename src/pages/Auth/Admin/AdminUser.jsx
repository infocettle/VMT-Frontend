import React, { useState } from "react";
import "../auth.css";
import AdminAuthOne from "../../../assets/img/AdminAuthOne.svg";
import AdminAuthTwo from "../../../assets/img/AdminAuthTwo.svg";
import AdminImageComponent from "./AdminImageComponent";

import AdminUserLogin from "./AdminUserLogin";
import AdminUserVerifyLogin from "./AdminUserVerifyLogin";
import AdminUserChangePassword from "./AdminUserChangePassword";
import AdminUserResetPassword from "./AdminUserResetPassword";
import AdminUserVerifyEmail from "./AdminUserVerifyEmail";
import AdminUserNewPassword from "./AdminUserNewPassword";

function AdminAuthUser() {
  const [formType, setFormType] = useState("admin-user-login");
  const handleSubmit = () => {
    console.log("Form submitted:", formType);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-overall-container">
        {formType === "admin-user-login" && (
          <AdminUserLogin setFormType={setFormType} onSubmit={handleSubmit} />
        )}
        {formType === "admin-user-verify-login" && (
          <AdminUserVerifyLogin setFormType={setFormType} onSubmit={handleSubmit} />
        )}
        {formType === "change-password" && (
          <AdminUserChangePassword setFormType={setFormType} onSubmit={handleSubmit} />
        )}
        {formType === "admin-user-reset-password" && (
          <AdminUserResetPassword setFormType={setFormType} onSubmit={handleSubmit} />
        )}
        {formType === "admin-user-verify-email" && (
          <AdminUserVerifyEmail setFormType={setFormType} onSubmit={handleSubmit} />
        )}
        {formType === "admin-user-new-password" && (
          <AdminUserNewPassword setFormType={setFormType} onSubmit={handleSubmit} />
        )}
      </div>

      { formType === "admin-user-login"|| formType === "admin-user-verify-login" || formType === "change-password" ? (
        <AdminImageComponent image={AdminAuthOne} />
      ) : (
        <AdminImageComponent image={AdminAuthTwo} />
      )}
    </div>
  );
}

export default AdminAuthUser;
