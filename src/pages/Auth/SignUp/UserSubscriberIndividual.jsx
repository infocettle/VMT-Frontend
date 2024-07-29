import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Select from "react-select";
import { IoIosArrowRoundBack } from "react-icons/io";
import MobileLogo from "../../../assets/img/MobileLogo.svg";
import { baseUrl } from "@/App";
import { sendData } from "@/hooks/usePostData";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserSubscriber } from "@/pages/Redux/authSubscriber.slice";
import { Loader } from 'lucide-react';
import axios from "axios";
function UserSubscriberIndividual({ setFormType,userType,partnerType }) {
  const url = `${baseUrl}v1/${userType}/individual/auth/register`;
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [countryCode, setCountryCode] = useState("+234");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nin, setNin] = useState("");
  const [administrator, setAdministrator] = useState("");
  const [referalCode, setReferalCode] = useState("");
  const [selectedFind, setSelectedFind] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [error, setError] = useState("");
  const [errorNin, setErrorNin] = useState("");
  const [titleOptions, setTitleOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTitles = async () => {
        try {
            const url = `${baseUrl}public-registry/personal-details/title?status=Active`;
            const response = await axios.get(url);
            const activeTitles = response.data
                .filter(item => item.status === 'Active')
                .map(item => ({ value: item.title.toUpperCase(), label: item.title.toUpperCase() }));
            setTitleOptions(activeTitles);
        } catch (error) {
            toast.error('Error fetching titles');
        }
    };

    fetchTitles();
}, [baseUrl]);
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
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Remove the country code prefix from the entered phone number if it exists
    const numberWithoutCode = value.startsWith(countryCode)
      ? value.slice(countryCode.length)
      : value;
    // Remove non-numeric characters
    const numericPhoneNumber = numberWithoutCode.replace(/\D/g, "");
    setPhoneNumber(numericPhoneNumber);
  };
  const handleRadioChange = (e) => {
    setAdministrator(e.target.value);
};
  const validateForm = () => {
    if (!selectedTitle) {
      toast.error("Title is required");
      return false;
    }
    if (!firstName.trim()) {
      toast.error("First name is required");
      return false;
    }
    if (!surname.trim()) {
      toast.error("Surname is required");
      return false;
    }
    if (!phoneNumber.trim()) {
      toast.error("Phone Number is required");
      return false;
    }
    if (!email.trim()) {
      toast.error("Email Address is required");
      return false;
    }
    if (nin.length !== 11) {
      toast.error("Invalid NIN: must be exactly 11 characters");
    }

    return true;
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);

    // Validate email
    if (!email.includes("@")) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };
  const handleNinChange = (e) => {
    const nin = e.target.value;

    // Validate nin

    const numericNin = nin.replace(/\D/g, "");
    setNin(numericNin);

    // Validate NIN
    if (numericNin.length !== 11) {
      setErrorNin("NIN must be exactly 11 digits");
    } else {
      setErrorNin("");
    }
  };
  const handleContinue = async () => {
    if (!validateForm()) {
      return;
    }
  
    const requestBody = {
      title: selectedTitle.value,
      heardAboutUs: selectedFind.value,
      surname: surname,
      firstName: firstName,
      phoneNumber: `${countryCode}${phoneNumber}`,
      email: email,
      nin: parseInt(nin),
      referalCode: referalCode,
      administratorType:administrator,
      
    };
  
    if (partnerType) {
      requestBody.partnerType = partnerType;
    }
  
    try {
      const returnedData = await sendData({
        url: url,
        body: requestBody,
        title: "Subscriber individual created",
        setLoading: setLoading 
      });
      dispatch(setUserSubscriber(returnedData.newUser));
      setFormType("individual-create-password");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };
  

  const handleGoback = () => {
    setFormType("user-subscriber");
  };
  const customStyles = {
  
    container: (provided) => ({
      ...provided,
      
      width:"100%",
    }),
    control: (provided) => ({
      ...provided,
      minHeight: "48px",
      height: "48px",
      width:"100%",
    }),
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
      <div className="auth-subheader-text mt-10">
        Fields labelled with "<span className="auth-mandatory">*</span>" are
        mandatory
      </div>
      <div className="auth-form-content">
        <div className="auth-form-flex">
          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">
              Title <span className="auth-mandatory">*</span>
            </div>
            <Select
                    value={selectedTitle}
                    placeholder="Select Title"
                    onChange={(selectedOption) => setSelectedTitle(selectedOption)}
                    options={titleOptions}
                    styles={customStyles}
                />
   
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">
              First Name <span className="auth-mandatory">*</span>
            </div>
            <input
              type="text"
              className="auth-input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="auth-form-flex">
          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">
              Surname <span className="auth-mandatory">*</span>
            </div>
            <input
              type="text"
              className="auth-input"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
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
                value={countryCode + phoneNumber}
                onChange={handlePhoneNumberChange}
                className="auth-input"
                style={{ width: "70%" }}
                placeholder={countryCode}
              />
            </div>
          </div>
        </div>
        <div className="auth-form-flex">
          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">
              Email Address <span className="auth-mandatory">*</span>
            </div>
            <input
              type="text"
              className={`auth-input ${error ? "border-red-500 focus " : ""}`}
              placeholder="Enter Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">NIN</div>
            <input
              type="text"
              className={`auth-input ${
                errorNin ? "border-red-500 focus " : ""
              }`}
              placeholder="Enter national identity number"
              value={nin}
              onChange={handleNinChange}
            /> 
          </div>
         
        </div>
        <div className="flex items-center justify-between w-100 gap-6">
      {error && <p className="text-red-500 w-1/2">{error}</p>}
         {errorNin && <p className="text-red-500 w-1/2">{errorNin}</p>}
      </div>
        <div className="auth-form-flex">
          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">Select applicable custom feature</div>
            <Select
              value={selectedRole}
              placeholder="Select Custom Feature"
              onChange={(selectedOption) => setSelectedRole(selectedOption)}
              options={[
                { value: "Hotel", label: "Hotel" },
                { value: "School", label: "School" },
                { value: "Club", label: "Club" },
                { value: "Hospital", label: "Hospital" },
                { value: "Others", label: "Others" },
              ]}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="auth-form-flex">
          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">Referral Code (optional)</div>
            <input
              type="text"
              className="auth-input"
              placeholder="Enter referral code"
              value={referalCode}
              onChange={(e) => setReferalCode(e.target.value)}
            />
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
        <div className="auth-form-flex">
          <div className="flex flex-col gap-2 w-full">
            <div className="auth-label">Are you the administrator?</div>
            <div className="flex gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="administrator"
                            value="yes"
                            checked={administrator === 'yes'}
                            onChange={handleRadioChange}
                        />
                        <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="administrator"
                            value="no"
                            checked={administrator === 'no'}
                            onChange={handleRadioChange}
                        />
                        <span className="ml-2">No</span>
                    </label>
              </div>
          </div>
        </div>
        <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">
          {loading ? <Loader className="animate-spin" /> : 'Save & Continue'}
        </div>
        </div>

        <div
          className="flex items-center w-full justify-center mt-5 cursor-pointer"
          onClick={handleGoback}
        >
          <IoIosArrowRoundBack
            style={{ fontSize: "1.3rem", color: "#0B6ED0" }}
          />
          <div className="auth-button-go-back">Go back</div>
        </div>
      </div>
    </div>
  );
}
export default UserSubscriberIndividual;
