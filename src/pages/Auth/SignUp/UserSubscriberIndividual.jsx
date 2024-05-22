import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Select from "react-select";
import { IoIosArrowRoundBack } from "react-icons/io";

function UserSubscriberIndividual({ setFormType }) {
  const [selectedCountry, setSelectedCountry] = useState("NG" );
  const [countryCode, setCountryCode] = useState("+234");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedCustomFeature, setSelectedCustomFeature] = useState("");
  const [selectedFind, setSelectedFind] = useState("");

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    // Here you can implement a mapping of country to country code
    // For demonstration purposes, I'll hardcode a few country codes
    const countryCodes = {
      NG: "+234", // Nigeria
      US: "+1", // United States
      GB: "+44", // United Kingdom
      DE: "+49", // Germany
      FR: "+33", // France
      JP: "+81", // Japan
      CN: "+86", // China
      IN: "+91", // India
      BR: "+55", // Brazil
      RU: "+7", // Russia
      // Add more countries and their country codes as needed
    };
    const code = countryCodes[selectedCountry] || "";
    setCountryCode(code);
  };

  const handleContinue = () => {
    setFormType("individual-create-password");
  };

  const handleGoback = () => {
    setFormType("user-subscriber");
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '48px',
      height: '48px',
    }),
  };

  return (
    <div className="auth-form-container">
      <div className="auth-header-text">Welcome to ValueMine</div>
      <div className="auth-subheader-text mt-3">
        Manage your financial and non-financial workflows seamlessly on the go
      </div>
      <div className="auth-subheader-text mt-10">Fields labelled with "<span className="auth-mandatory">*</span>" are mandatory</div>

      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            Title <span className="auth-mandatory">*</span>
          </div>
          <Select
            value={selectedTitle}
            placeholder="Select Title"
            onChange={(selectedOption) => setSelectedTitle(selectedOption)}
            options={[
              { value: "Mr", label: "Mr" },
              { value: "Mrs", label: "Mrs" },
              { value: "Miss", label: "Miss" },
            ]}
            styles={customStyles}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            First Name <span className="auth-mandatory">*</span>
          </div>
          <input type="text" className="auth-input" placeholder="First Name" />
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            Surname <span className="auth-mandatory">*</span>
          </div>
          <input type="text" className="auth-input" placeholder="Surname" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            Phone number <span className="auth-mandatory">*</span>
          </div>
          <div className="auth-form-phone">
            <ReactFlagsSelect
              countries={[
                "NG",
                "US",
                "GB",
                "DE",
                "FR",
                "JP",
                "CN",
                "IN",
                "BR",
                "RU",
              ]}
              selected={selectedCountry}
              onSelect={handleCountryChange}
              showSelectedLabel={false}
              showOptionLabel={false}
              className="menu-flags"
            />
            <input
              type="text"
              value={countryCode}
              readOnly
              className="auth-input"
              style={{ width: "70%" }}
            />
          </div>
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Email Address <span className="auth-mandatory">*</span></div>
          <input type="text" className="auth-input" placeholder="Enter Email Address" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">NIN</div>
          <input type="text" className="auth-input" placeholder="Enter national identity number" />
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Select applicable custom feature</div>
          <Select
            value={selectedCustomFeature}
            placeholder="Select a custom feature"
            onChange={(selectedOption) => setSelectedCustomFeature(selectedOption)}
            options={[
              { value: "A", label: "A" },
              { value: "B", label: "B" },
              { value: "C", label: "C" },
            ]}
            styles={customStyles}
          />
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Referral Code (optional)</div>
          <input type="text" className="auth-input" placeholder="Enter referral code" />
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">How did you hear about us?</div>
          <Select
         styles={customStyles}
            value={selectedFind}
            placeholder="How did you hear about us"
            onChange={(selectedOption) => setSelectedFind(selectedOption)}
            options={[
              { value: "Website", label: "Website" },
              { value: "Google", label: "Google" },
              { value: "Instagram", label: "Instagram" },
            ]}
          />
        </div>
      </div>
      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Save & Continue</div>
      </div>

      <div className="flex items-center w-full justify-center mt-5 cursor-pointer " onClick={handleGoback}>
      <IoIosArrowRoundBack style={{fontSize:"1.3rem",color:"#0B6ED0"}} />
        <div className="auth-button-go-back">Go back</div>
      </div>
    </div>
  );
}
export default UserSubscriberIndividual;
