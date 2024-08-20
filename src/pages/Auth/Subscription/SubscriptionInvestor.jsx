import React, { useState, useEffect } from "react";
import "./subscription.css";
import Table from "./FirstSubTable";
import Select from "react-select";
import getSymbolFromCurrency from "currency-symbol-map";

function SubscriptionInvestor({ setSubscriptionType}) {
  const [selectedDateType, setSelectedDateType] = useState("1-month");
  const [endDate, setEndDate] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);
  const [equityAmount, setEquityAmount] = useState(0);
  const [debtAmount, setDebtAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Initialize with default currency

  useEffect(() => {
    // Your effect logic goes here
    const totalAmountPayable = equityAmount + debtAmount;
    console.log(totalAmountPayable)
    setTotalAmountPayable(totalAmountPayable)
  }, [equityAmount,debtAmount]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "48px",
      height: "48px",
   
    }),
  };

  const handleProceed = () => {
    setSubscriptionType("completed-subcription")
  };

  // Function to handle currency selection
  const handleCurrencyChange = (selectedOption) => {
    setSelectedCurrency(selectedOption.value);
  };

  return (
    <div className="sub-form-container">
      <div className="sub-header-container">SUBSCRIPTION</div>
      <div className="sub-form-container mt-10">
        <div className="sub-form">
          <div className="sub-form-header">First Investment</div>
          <div className="sub-form-header-grid" style={{ gridTemplateRows: "repeat(1, 1fr)" }}>
            <div className="sub-form-header-key">Investor ID:</div>
            <div className="sub-form-header-key">238957340124</div>
          </div>
          <div className="auth-form-flex">
            <div className="flex flex-col gap-2 w-full">
              <div className="auth-label">Equity amount</div>
              <div className="auth-form-phone">
              <Select
                value={selectedCurrency}
                placeholder="₦"
                onChange={(selectedOption) => setSelectedCurrency(selectedOption)}
                options={[
                  { value: "£", label: "£" },
                  { value: "€", label: "€" },
                  { value: "$", label: "$" },
                ]}
                styles={customStyles}
                className="react-select"
              />
                <input
                  type="number"
                  placeholder="0"
                  className="auth-input"
                  style={{ width: "90%", paddingRight: "10px" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="auth-label">Debt amount</div>
              <div className="auth-form-phone">
              <Select
                value={selectedCurrency}
                placeholder="₦"
                onChange={(selectedOption) => setSelectedCurrency(selectedOption)}
                options={[
                  { value: "£", label: "£" },
                  { value: "€", label: "€" },
                  { value: "$", label: "$" },
                ]}
                styles={customStyles}
                className="react-select"
              />
                <input
                  type="number"
                  placeholder="0"
                  className="auth-input"
                  style={{ width: "90%", paddingRight: "10px" }}
                />
              </div>
            </div>
          </div>
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
          <div className="subscription-terms">
            <input type="checkbox"/>
          <div className="subscription-terms-text">I agree to Valuemine’s Investment <span> Terms & Conditions</span></div>
          </div>
          <div className="auth-form-flex mt-5 justify-between">
            <div
              className="auth-button"
              style={{ width: "fit-content", padding: "10px" }}
              onClick={handleProceed}
            >
              <div className="auth-button-text">Proceed to payment</div>
            </div>
            <div className="total_amount_text">Total Amount Payable</div>
          </div>
          <div className="auth-form-flex mt-2 mb-6 justify-between">
            <div className="flex items-center w-full mt-5 cursor-pointer" onClick={() => {/* Handle cancel */}}>
              <div className="auth-button-go-back">Cancel</div>
            </div>
            <div className="total_amount">{totalAmountPayable.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionInvestor;
