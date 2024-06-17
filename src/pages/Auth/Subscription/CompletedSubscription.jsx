import React, { useState, useEffect } from "react";
import "./subscription.css";
import SubStarsComplete from "../../../assets/img/SubStarsComplete.svg";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { AiOutlineInfo } from "react-icons/ai";
const customStyles = {
  overlay:{
    backgroundColor:"rgba(0,0,0,0.4 )",
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"70vh",
    padding:"50px",
   
  },
};

function CompletedSubscription({setSubscriptionType}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

    const navigate = useNavigate()
  
   
    
  
    const handleDashboard = () => {
      navigate("/profile/company-subscriber")
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
              onClick={openModal}
            >
              <div className="auth-button-text">Continue to Dashboard</div>
            </div>
            </div>
      
         
        </div>
        <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div className="flex flex-col gap-5 items-center">
  <div>
        <AiOutlineInfo  style={{width:"66px",height:"66px", background:"#0EB4F1", color:"white",borderRadius:"50%"}}/>
        </div>
 <p>Do you want to complete your profile now?</p>
          <div className="flex  w-full justify-center  items-center gap-5">
  <div
              className="flex items-center  cursor-pointer "
              onClick={{}}
            >
              <div className="secondary-button">Not now</div>
            </div>
          <div
              className="auth-button "
              style={{ width: "fit-content", padding: "10px" }}
              onClick={handleDashboard}
            >
              <div className="auth-button-text">Yes, go to profile</div>
            </div>
          </div>
       </div>
      
   
         
        
        
  
      </Modal>
    </div>
  );
}

export default CompletedSubscription
