import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Logo from "../../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";
function AdminForgotPassword({ setFormType }) {

const navigate = useNavigate()
  
   
    
  const handleContinue = () => {
    setFormType('admin-login')
  };
  
 

  return (
    <div className="auth-form-container">
        <div className="flex justify-center items-center w-full mb-10">
      
<img src={Logo} alt="image" className="" />      
        </div>

      <div className="auth-header-text text-center w-full mb-4">Forgot Password</div>
      <div className="auth-subheader-text mt-7">
      <span style={{fontWeight:"700"}}>Please contact Valuemine backend support to recover password</span> 
      </div>
     

      

      
      <div className="subscription-terms justify-center w-full">
     

          <div className="subscription-terms-text cursor-pointer" > <span>vmt@support.com</span></div>
          </div>
      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Go to login</div>
      </div>
     
    </div>
  );
}

export default AdminForgotPassword;
