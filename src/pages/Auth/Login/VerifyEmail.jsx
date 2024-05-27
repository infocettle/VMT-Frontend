import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function VerifyEmail({ setFormType }) {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

  
   
    
  const handleContinue = () => {
    setFormType("new-password");
  };
  const handleBack = () => {
    setFormType("reset-password");
  };

  return (
    <div className="auth-form-container">
      <div className="auth-header-text">Verify Email</div>
      <div className="auth-subheader-text mt-7">
      A one time password has been sent to your email, please enter code below to confirm email and reset password.
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
        <div className="auth-button-go-back">Go back</div>
      </div>
    </div>
  );
}

export default VerifyEmail;
