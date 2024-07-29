import React, { useState } from "react";
import MobileLogo from "../../../assets/img/MobileLogo.svg";
import { HiOutlineBuildingOffice2, HiOutlineUser } from "react-icons/hi2";
function UserSubscriber({setFormType}) {
  const [showPartnerType, setShowPartnerType] = useState(false);
  const [selectedPartnerType, setSelectedPartnerType] = useState(null);
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handlePartnerTypeChange = (event) => {
    setSelectedPartnerType(event.target.value);
  };
  const handleCheckboxChange = (index) => {
    
    if (index === "subscriber") {
      // Uncheck the current checkbox if clicked again
      setCheckedIndex(0);
      setSelectedPartnerType(null);
  
    } else {
      setCheckedIndex(1);

    }
  };
  const handleShowPartnerType = () => {
    setShowPartnerType(true);
    handleCheckboxChange(1);
  };
  const handleContinue = () => {
    if (checkedIndex === 0) {
        // Uncheck the current checkbox if clicked again
        
        setFormType("user-subscriber-individual")
      } else {
        
        setFormType("user-subscriber-company")
      }
  };
  const handleGoback = () => {
   
        
        setFormType("signup")
      
  };
console.log(checkedIndex)
  return (
    <div className="auth-form-container">
       <div className="auth-logo-two">
     <img src={MobileLogo} alt="image"/>
</div> 
      <div className="auth-header-text">Welcome to ValueMine</div>
      <div className="auth-subheader-text mt-3">
        Manage your financial and non-financial workflows seamlessly on the go
      </div>
      <div className="auth-select-text mt-10">
      Select your entity type
      </div>

      <div
        className={
          checkedIndex === 0
            ? "auth-choose-user-box active mt-10"
            : "auth-choose-user-box mt-10"
        }
        onClick={() => {
          handleCheckboxChange("subscriber");
          setShowPartnerType(false);
        }}
      >
        <HiOutlineUser style={{ fontSize: "2rem" }} />
        <div className="auth-choose-user-box-text">Individual</div>
      </div>
      <div
        className={
          checkedIndex === 1
            ? "auth-choose-user-box active mt-10"
            : "auth-choose-user-box mt-10"
        }
        onClick={handleShowPartnerType}
      >
        <HiOutlineBuildingOffice2 style={{ fontSize: "2rem" }} />
        <div className="auth-choose-user-box-text">Company</div>
      </div>


      <div
        className={`auth-button mt-10 ${checkedIndex === null ? "disabled" : ""}`}
        onClick={handleContinue}
        style={{ pointerEvents: checkedIndex === null ? "none" : "auto", opacity: checkedIndex === null ? 0.5 : 1 }}
      >
        <div className="auth-button-text">Continue</div>
      </div>
     
      <div className="auth-button-white mt-5" onClick={handleGoback}>
        <div className="auth-button-white-text">Go back</div>
      </div>
    </div>
  );
}

export default UserSubscriber;
