import React, { useState } from "react";
import SubscriptionSubscriber from "./SubscriptionSubscriber";
import SubscriptionInvestor from "./SubscriptionInvestor";
import SubscriptionConsultant from "./SubscriptionConsultant";
import CompletedSubscription from "./CompletedSubscription";
import Logo from "../../../assets/img/Logo.svg";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import Avatar from "../../../assets/img/Avatar.svg";
import { useSelector } from "react-redux";
function Subscription() {
  const userData = useSelector((state) => state.auth.user);
  console.log(userData);
  const [subscriptionType, setSubscriptionType] =
    useState("first-subscription");
  const handleSubmit = () => {
    console.log("Form submitted:", subscriptionType);
  };

  return (
    <div className="sub-container">
      <div className="sub-form-overall-container">
        <div className="w-full flex items-center bg-white justify-between pt-2 pl-10 pb-2">
          <div className=" flex items-center ">
            <img src={Logo} alt="image" style={{ width: "200px" }} />
          </div>

          <div className=" flex flex-col items-start">
            <div className="w-full  py-2 px-4 flex items-center justify-between">
              <div className="w-auto flex items-center space-x-2 mr-6">
                <FaRegBell
                  style={{
                    fontSize: "1.4rem",
                    color: "#666687",
                    marginRight: "0.5rem",
                  }}
                />
                <MdOutlineSettings
                  style={{
                    fontSize: "2rem",
                    color: "#666687",
                    marginRight: "0.5rem",
                    className: "d-none",
                  }}
                />
                <div className=" w-full flex items-center gap-2  ">
                  <img src={Avatar} alt="image" />

                  <p style={{ fontSize: "14px", color: "#666687" }}>
                    {userData.firstName.toUpperCase()}{" "}
                    {userData.surname.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {subscriptionType === "first-subscription" && (
          <SubscriptionSubscriber
            setSubscriptionType={setSubscriptionType}
            onSubmit={handleSubmit}
            userData={userData}
          />
        )}
        {subscriptionType === "subscription-investor" && (
          <SubscriptionInvestor
            setSubscriptionType={setSubscriptionType}
            onSubmit={handleSubmit}
          />
        )}
        {subscriptionType === "subscription-consultant" && (
          <SubscriptionConsultant
            setSubscriptionType={setSubscriptionType}
            onSubmit={handleSubmit}
          />
        )}
        {subscriptionType === "completed-subcription" && (
          <CompletedSubscription
            setSubscriptionType={setSubscriptionType}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default Subscription;
