import React, { useState } from "react";
import MobileLogo from "../../../assets/img/MobileLogo.svg";
import { HiOutlineUsers, HiOutlineUser } from "react-icons/hi2";
import { toast } from "react-toastify";

function UserSignUp({ setFormType,setPartnerType,setUserType }) {
  const [showPartnerType, setShowPartnerType] = useState(false);
  const [selectedPartnerType, setSelectedPartnerType] = useState(null);
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handlePartnerTypeChange = (event) => {
    setSelectedPartnerType(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    if (index === "subscriber") {
      setCheckedIndex(0);
      setUserType("subscriber");
      setSelectedPartnerType(null);
    } else {
      setUserType("partner")
      setCheckedIndex(1);
    }
  };

  const handleShowPartnerType = () => {
    setShowPartnerType(true);
    handleCheckboxChange(1);
  };

  const handleContinue = () => {
    if (!selectedPartnerType & checkedIndex === 1){
      toast.error(`Choose a partner type`);
      return false;
    }else{
      setPartnerType(selectedPartnerType);
    }
   
    if (checkedIndex !== null) {
      setFormType("user-subscriber");
      
    }
  };

  const handleLogin = () => {
    setFormType("login-user");
  };

  return (
    <div className="auth-form-container">
      <div className="auth-logo-two">
        <img src={MobileLogo} alt="image" />
      </div>
      <div className="auth-header-text">Welcome to ValueMine</div>
      <div className="auth-subheader-text mt-3">
        Manage your financial and non-financial workflows seamlessly on the go
      </div>
      <div className="auth-select-text mt-10">
        Select a group that describes you
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
        <div className="auth-choose-user-box-text">Subscriber</div>
      </div>
      <div
        className={
          checkedIndex === 1
            ? "auth-choose-user-box active mt-10"
            : "auth-choose-user-box mt-10"
        }
        onClick={handleShowPartnerType}
      >
        <HiOutlineUsers style={{ fontSize: "2rem" }} />
        <div className="auth-choose-user-box-text">Partner</div>
      </div>

      {showPartnerType && (
        <div className="flex flex-col mt-5 w-full">
          <div className="flex items-center gap-2 mt-2">
            <input
              type="radio"
              id="agent"
              value="Agent"
              checked={selectedPartnerType === "Agent"}
              onChange={handlePartnerTypeChange}
            />
            <label htmlFor="agent" className="auth-choose-partner-type-text">
              Agent
            </label>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="radio"
              id="consultant"
              value="Consultant"
              checked={selectedPartnerType === "Consultant"}
              onChange={handlePartnerTypeChange}
            />
            <label
              htmlFor="consultant"
              className="auth-choose-partner-type-text"
            >
              Consultant
            </label>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="radio"
              id="investor"
              value="Investor"
              checked={selectedPartnerType === "Investor"}
              onChange={handlePartnerTypeChange}
            />
            <label htmlFor="investor" className="auth-choose-partner-type-text">
              Investor
            </label>
          </div>
        </div>
      )}

      <div
        className={`auth-button mt-10 ${checkedIndex === null ? "disabled" : ""}`}
        onClick={handleContinue}
        style={{ pointerEvents: checkedIndex === null ? "none" : "auto", opacity: checkedIndex === null ? 0.5 : 1 }}
      >
        <div className="auth-button-text">Continue</div>
      </div>
      <div className="auth-already mt-5">Already have a ValueMine account?</div>

      <div className="auth-button-white mt-5" onClick={handleLogin}>
        <div className="auth-button-white-text">Login to your account</div>
      </div>
      <div className="image-auth-text-two">
        ERP for Micro, Small and Medium Entities
      </div>
    </div>
  );
}

export default UserSignUp;
