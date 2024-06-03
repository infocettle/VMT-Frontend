import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Select from "react-select";
import { IoIosArrowRoundBack } from "react-icons/io";
import MobileLogo from "../../../assets/img/MobileLogo.svg";
import { baseUrl } from "@/App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUserSubscriber } from "@/pages/Redux/authSubscriber.slice";
import { useDispatch } from "react-redux";
import { sendData } from "@/hooks/usePostData";

function UserSubscriberCompany({ setFormType }) {
  const navigate = useNavigate();
  const url = `${baseUrl}v1/subscriber/company/auth/register`;
  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [countryCode, setCountryCode] = useState("+234");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedFind, setSelectedFind] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    companyName: "",
    shortName: "",
    companyEmail: "",
    companyPhone: "",
    firstName: "",
    surname: "",
    phoneNumber: "",
    email: "",
    nin: "",
    referalCode: "",
  });

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    const countryCodes = {
      NG: "+234",
      US: "+1",
      GB: "+44",
      DE: "+49",
      FR: "+33",
      JP: "+81",
      CN: "+86",
      IN: "+91",
      BR: "+55",
      RU: "+7",
    };
    const code = countryCodes[selectedCountry] || "";
    setCountryCode(code);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.companyName.trim()) {
      toast.error("Company name is required");
      return false;
    }
    if (!formData.shortName.trim()) {
      toast.error("Short name is required");
      return false;
    }
    if (!formData.companyEmail.trim()) {
      toast.error("Company email is required");
      return false;
    }
    if (!formData.companyPhone.trim()) {
      toast.error("Company phone number is required");
      return false;
    }
    if (!selectedTitle) {
      toast.error("Title is required");
      return false;
    }
    if (!formData.firstName.trim()) {
      toast.error("First name is required");
      return false;
    }
    if (!formData.surname.trim()) {
      toast.error("Surname is required");
      return false;
    }
    if (!formData.phoneNumber.trim()) {
      toast.error("Phone Number is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email Address is required");
      return false;
    }
    
  
    if (!selectedRole) {
      toast.error("Role is required");
      return false;
    }
    return true;
  };

  const handleContinue = async () => {
    if (!validateForm()) return;

    const body = {
      title: selectedTitle.value,
      heardAboutUs:  "google",
      surname: formData.surname,
      firstName: formData.firstName,
      phoneNumber: `${countryCode}${formData.phoneNumber}`,
      email: formData.email,
      nin: formData.nin,
      companyEmail: formData.companyEmail,
      shortName: formData.shortName,
      companyName: formData.companyName,
      companyPhone: formData.companyPhone,
      role: selectedRole.value,
      referalCode: "2222222",
    };

    try {
      const returnedData = await sendData({
        url: url,
        body: body,
        title: "Subscriber company created",
      });
   dispatch(setUserSubscriber(returnedData.newUser)) 
      setFormType("company-create-password");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleGoback = () => {
    setFormType("user-subscriber");
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "48px",
      height: "48px",
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
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            Company's name <span className="auth-mandatory">*</span>
          </div>
          <input
            type="text"
            className="auth-input"
            placeholder="Enter company's name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            Short Name <span className="auth-mandatory">*</span>
          </div>
          <input
            type="text"
            className="auth-input"
            placeholder="Enter company's short name"
            name="shortName"
            value={formData.shortName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            Email Address <span className="auth-mandatory">*</span>
          </div>
          <input
            type="text"
            className="auth-input"
            placeholder="Enter company's email address"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
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
              name="companyPhone"
              placeholder="Company phone number"
              value={formData.companyPhone}
              onChange={handleChange}
              className="auth-input"
              style={{ width: "70%" }}
            />
          </div>
        </div>
      </div>

      <div>Representative's Details</div>
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
          <input
            type="text"
            className="auth-input"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
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
            name="surname"
            value={formData.surname}
            onChange={handleChange}
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
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="auth-input"
              style={{ width: "70%" }}
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
            className="auth-input"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
            Role <span className="auth-mandatory">*</span>
          </div>
          <Select
            value={selectedRole}
            placeholder="Select Role"
            onChange={(selectedOption) => setSelectedRole(selectedOption)}
            options={[
              { value: "Admin", label: "Admin" },
              { value: "Manager", label: "Manager" },
              { value: "Employee", label: "Employee" },
            ]}
            styles={customStyles}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
           NIN
          </div>
          <input
            type="text"
            className="auth-input"
            placeholder="Enter national identity number"
            name="nin"
            value={formData.nin}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Save & Continue</div>
      </div>

      <div
        className="flex items-center w-full justify-center mt-5 cursor-pointer "
        onClick={handleGoback}
      >
        <IoIosArrowRoundBack style={{ fontSize: "1.3rem", color: "#0B6ED0" }} />
        <div className="auth-button-go-back">Go back</div>
      </div>
    </div>
  );
}

export default UserSubscriberCompany;

