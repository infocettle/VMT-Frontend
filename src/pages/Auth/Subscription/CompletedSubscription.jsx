import React, { useState, useEffect } from "react";
import "./subscription.css";
import SubStarsComplete from "../../../assets/img/SubStarsComplete.svg";
import { useNavigate } from "react-router-dom";

function CompletedSubscription({setSubscriptionType}) {


    const navigate = useNavigate()
  
   
    
  
    const handleDashboard = () => {
      navigate("/userDashboard")
    };
  

  return (
    <div className="sub-form-container">
      
        <div className="sub-form flex justify-center items-center " style={{height:"82vh",margin:"3rem auto"}}>
            <div className="flex justify-center items-center flex-col mx-auto" style={{maxWidth:"500px"}}>

  <img src={SubStarsComplete} alt="image"/>
         
        <div className="auth-header-text mt-4">Welcome Aboard!</div>
      <div className="auth-subheader-text mt-4 mb-7 text-center">
      You have completed you first subscription, you can now access the features 
and perform various action on the application
      </div>
          <div
              className="auth-button"
              style={{ width: "fit-content", padding: "10px" }}
              onClick={handleDashboard}
            >
              <div className="auth-button-text">Continue to Dashboard</div>
            </div>
            </div>
      
         
        </div>
    
    </div>
  );
}

export default CompletedSubscription
