import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Logo from "../../../assets/img/Logo.svg";
function AdminUserVerifyEmail({ setFormType }) {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

  
   
    
  const handleContinue = () => {
    setFormType("admin-user-new-password");
  };
  const handleBack = () => {
    setFormType("admin-user-login");
  };

  return (
    <div className="auth-form-container">
        <div className="flex justify-center items-center w-full mb-10">
      
      <img src={Logo} alt="image" className="" />      
              </div>
      <div className="auth-header-text w-full text-center">Verify Email</div>
      <div className="auth-subheader-text mt-7">
      A one time password has been sent to your email, please enter code below to confirm email and reset password
      </div>
     

      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">OTP code </div>
          <input
            type="text"
            className="auth-input"
            placeholder="--- ---"
          />
        </div>
      
      </div>

     

      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Confirm</div>
      </div>
    

      <div className="flex items-center w-full justify-center mt-5 cursor-pointer " onClick={handleBack}>
      <IoIosArrowRoundBack style={{fontSize:"1.3rem",color:"#0B6ED0"}} />
        <div className="auth-button-go-back">Go back to login</div>
      </div>
    </div>
  );
}

export default AdminUserVerifyEmail;
