import React, { useState, useEffect } from "react";
import "./subscription.css";
import Table from "./FirstSubTable";
import Select from "react-select";
function SubscriptionSubscriber({setSubscriptionType}) {
  const [selectedDateType, setSelectedDateType] = useState("1-month");
  const [endDate, setEndDate] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);

  useEffect(() => {
    calculateEndDate(selectedDateType);
  }, []);
  const handleProceed = () => {
    setSubscriptionType("completed-subcription")
  };
  const handleDateTypeChange = (event) => {
    setSelectedDateType(event.target.value);
    calculateEndDate(event.target.value);
  };

  const calculateEndDate = (dateType) => {
    const today = new Date();
    let newEndDate = new Date(today);
    if (dateType === "1-month") {
      newEndDate.setMonth(today.getMonth() + 1);
    } else if (dateType === "3-months") {
      newEndDate.setMonth(today.getMonth() + 3);
    } else if (dateType === "6-months") {
      newEndDate.setMonth(today.getMonth() + 6);
    } else if (dateType === "1-year") {
      newEndDate.setFullYear(today.getFullYear() + 1);
    }
    setEndDate(newEndDate);
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "48px",
      height: "48px",
    }),
  };
  return (
    <div className="sub-form-container">
      <div className="sub-header-container">SUBSCRIPTION</div>
      <div className="sub-form-container mt-10" >
        <div className="sub-form">
          <div className="sub-form-header">First Subscription</div>
          <div className="sub-form-header-grid">
            <div className="sub-form-header-key">User ID:</div>
            <div className="sub-form-header-key">238957340124</div>
            <div className="sub-form-header-key">Agent Code</div>
            <div className="sub-form-header-key">238957340124</div>
            <div className="sub-form-header-key">Payment Cycle</div>
            <div className="sub-form-header-key">
              <div className="flex">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="1-month"
                    value="1-month"
                    checked={selectedDateType === "1-month"}
                    onChange={handleDateTypeChange}
                  />
                  <label htmlFor="1-month" className="sub-form-header-date">
                    1 month
                  </label>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <input
                    type="radio"
                    id="3-months"
                    value="3-months"
                    checked={selectedDateType === "3-months"}
                    onChange={handleDateTypeChange}
                  />
                  <label htmlFor="3-months" className="sub-form-header-date">
                    3 months
                  </label>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <input
                    type="radio"
                    id="6-months"
                    value="6-months"
                    checked={selectedDateType === "6-months"}
                    onChange={handleDateTypeChange}
                  />
                  <label htmlFor="6-months" className="sub-form-header-date">
                    6 months
                  </label>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <input
                    type="radio"
                    id="1-year"
                    value="1-year"
                    checked={selectedDateType === "1-year"}
                    onChange={handleDateTypeChange}
                  />
                  <label htmlFor="1-year" className="sub-form-header-date">
                    1 year
                  </label>
                </div>
              </div>
            </div>
            <div className="sub-form-header-key">End Date</div>
            <div className="sub-form-header-key">
              {endDate && formatDate(endDate)}
            </div>
          </div>
          <Table setTotalAmountPayable={setTotalAmountPayable} />
          <div className="auth-form-flex">
            <div className="flex flex-col gap-2 w-full">
              <div className="auth-label">Tax identification number(TIN)</div>
              <input
                type="text"
                className="auth-input"
                placeholder="Enter TIN"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="auth-label">Issuing authority</div>
              <Select
                value={selectedRole}
                placeholder="Select issuing authority"
                onChange={(selectedOption) => setSelectedRole(selectedOption)}
                options={[
                  { value: "Authority One", label: "Authority One" },
                  { value: "B", label: "B" },
                  { value: "C", label: "C" },
                ]}
                styles={customStyles}
              />
            </div>
          </div>

          <div className="auth-form-flex mt-10 justify-between">
            <div
            className="auth-button "
            style={{ width: "fit-content", padding:"10px" }}
            onClick={handleProceed}
          >
            <div className="auth-button-text">Proceed to payment</div>
          </div>
          <div className="total_amount_text">Total Amount Payable</div>
          </div>
          
          <div className="auth-form-flex mt-2 mb-6 justify-between">
          <div className="flex items-center w-full  mt-5 cursor-pointer " onClick={{}}>
     
     <div className="auth-button-go-back">Cancel</div>
   </div>
          <div className="total_amount">{totalAmountPayable.toFixed(2)}</div>
          </div>
    
        </div>
      </div>
    </div>
  );
}


export default SubscriptionSubscriber;
