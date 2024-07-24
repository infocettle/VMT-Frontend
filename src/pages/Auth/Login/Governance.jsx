import React, { useState } from "react";
import ArrowAuthRight from "../../../assets/img/ArrowAuthRight.svg";
import { useNavigate } from "react-router-dom";

function Governance({ setFormType }) {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  
   
    
  const handleContinue = () => {
    navigate("/subscription");
  };
  const handleBack = () => {
    navigate("/subscription")
  };

  return (
    <div className="auth-form-container">
      <div className="auth-header-text">Welcome Mr. James Nwachukwu</div>
      <div className="auth-subheader-text mt-7">
      To <span style={{fontWeight:"700"}}>proceed</span> , please select and complete the outstanding tasks noted below:
      </div>
     

      <div className="flex items-center justify-between w-full mt-5">
      <div className="governance-text">Sign Agreement</div>
        <img src={ArrowAuthRight} alt="image"/>
      
      </div>
      <div className="flex items-center justify-between w-full mt-10">
      <div className="governance-text">Update your profile</div>
        <img src={ArrowAuthRight} alt="image"/>
      
      </div>

     

      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Continue</div>
      </div>
    

      <div className="flex items-center w-full justify-center mt-10 cursor-pointer " onClick={handleBack}>
   
        <div className="auth-button-go-back">Skip for later</div>
      </div>
    </div>
  );
}

export default Governance;
