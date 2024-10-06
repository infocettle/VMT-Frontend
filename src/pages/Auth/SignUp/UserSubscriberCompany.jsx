import React, { useEffect, useState } from "react";
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
import { Loader } from 'lucide-react';
import axios from "axios";
function UserSubscriberCompany({ setFormType,userType,partnerType }) {
  const navigate = useNavigate();
  const url = `${baseUrl}${userType}/company/auth/register`;
  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [selectedCountryTwo, setSelectedCountryTwo] = useState("NG");
  const [countryCode, setCountryCode] = useState("+234");
  const [countryCodeTwo, setCountryCodeTwo] = useState("+234");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [titleOptions, setTitleOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCustomFeature, setSelectedCustomFeature] = useState(null);
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
    role: "",
    selectedFind: "",
    referalCode: "",
  });
  const [errors, setErrors] = useState({
    companyEmail: "",
    email: "",
    nin: "",
  });
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
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Remove the country code prefix from the entered phone number if it exists
    const numberWithoutCode = value.startsWith(countryCode) ? value.slice(countryCode.length) : value;
    // Remove non-numeric characters
    const numericPhoneNumber = numberWithoutCode.replace(/\D/g, '');
    setFormData(prevFormData => ({
      ...prevFormData,
      companyPhone: numericPhoneNumber
    }));

  };
  const handleCountryChangeTwo = (selectedCountry) => {
    setSelectedCountryTwo(selectedCountry);
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
    setCountryCodeTwo(code);
  };
  const handlePhoneNumberChangeTwo = (e) => {
    const value = e.target.value;
    // Remove the country code prefix from the entered phone number if it exists
    const numberWithoutCode = value.startsWith(countryCodeTwo) ? value.slice(countryCodeTwo.length) : value;
    // Remove non-numeric characters
    const numericPhoneNumber = numberWithoutCode.replace(/\D/g, '');
    setFormData(prevFormData => ({
      ...prevFormData,
      phoneNumber: numericPhoneNumber
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "email"){
       // Validate email
    if (!value.includes('@')) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Invalid email address'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
    }
    if (name === "companyEmail"){
       // Validate company email
    if (!value.includes('@')) {
      setErrors(prevErrors => ({
        ...prevErrors,
        companyEmail: 'Invalid company email address'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
    }
    if (name === "nin"){
      const numericNin = value.replace(/\D/g, '');
      setFormData(prevFormData => ({
        ...prevFormData,
        nin: numericNin
      }));
  
      // Validate NIN
      if (numericNin.length !== 11) {
        setErrors(prevErrors => ({
          ...prevErrors,
          nin: 'NIN must be exactly 11 digits'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          nin: ''
        }));
      }
    }
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
  
    
  
    if (!selectedCustomFeature) {
      toast.error("Custom feature is required");
      return false;
    } 
    return true;
  };

  const handleContinue = async () => {
    if (!validateForm()) return;

    const body = {
      title: selectedTitle.value,
      heardAboutUs:  formData.selectedFind.value,
      surname: formData.surname,
      firstName: formData.firstName,
      phoneNumber: `${countryCodeTwo}${formData.phoneNumber}`,
      email: formData.email,
      nin: parseInt(formData.nin),
      companyEmail: formData.companyEmail,
      shortName: formData.shortName,
      companyName: formData.companyName,
      companyPhone: `${countryCode}${formData.companyPhone}`,
      customFeature: selectedCustomFeature.value,
      referalCode: formData.referalCode,
      companyRole:formData.role.value,
    };
    if (partnerType) {
      body.partnerType = partnerType;
    }
    try {
      const returnedData = await sendData({
        url: url,
        body: body,
        title: "Subscriber company created",
        setLoading: setLoading 
      });
      dispatch(setUserSubscriber(returnedData.newUser));
      setFormType("company-create-password");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
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
      <div className="auth-form-content">

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
            className={`auth-input ${errors.companyEmail ? 'border-red-500' : ''}`}
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
              value={countryCode + formData.companyPhone}
              onChange={handlePhoneNumberChange}
              className="auth-input"
              style={{ width: "70%" }}
            />
          </div>
        </div>
        
      </div>
      <div className="flex items-center justify-between w-100 gap-6">
      {errors.companyEmail && <p className="text-red-500">{errors.companyEmail}</p>}

      </div>

      <div className="auth-form-flex">
      <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
          Custom Feature <span className="auth-mandatory">*</span>
          </div>
          <Select
            value={selectedCustomFeature}
            placeholder="Select Custom Feature"
            onChange={(selectedOption) => setSelectedCustomFeature(selectedOption)}
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

      <div className="mt-8">Representative's Details</div>
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
              selected={selectedCountryTwo}
              onSelect={handleCountryChangeTwo}
              showSelectedLabel={false}
              showOptionLabel={false}
              className="menu-flags"
            />
            <input
              type="text"
              name="phoneNumber"
              value={countryCodeTwo + formData.phoneNumber}
              onChange={handlePhoneNumberChangeTwo}
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
            className={`auth-input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
    
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">
           NIN
          </div>
          <input
            type="text"
            className={`auth-input ${errors.nin ? 'border-red-500' : ''}`}
            placeholder="Enter national identity number"
            name="nin"
            value={formData.nin}
            onChange={handleChange}
          />
          
        </div>
      </div>
      <div className="flex items-center justify-between w-100 gap-6">
      {errors.email && <p className="text-red-500 w-1/2">{errors.email}</p>}
         {errors.nin && <p className="text-red-500 w-1/2">{errors.nin}</p>}
      </div>
     

        
      <div className="auth-form-flex">
      <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Role</div>
          
           <Select
            styles={customStyles}
            value={formData.role}
            placeholder="Your role"
            onChange={(selectedOption) => {
              setFormData(prevFormData => ({
                ...prevFormData,
                role: selectedOption
              }));
            }}
            options={[
              { value: "Admin", label: "Admin" },
              { value: "IT", label: "IT" },
              { value: "Finance", label: "Finance" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Referral Code</div>
          <input
            type="text"
            className="auth-input"
            name="referalCode"
            placeholder="Enter referral code"
            value={formData.referalCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">How did you hear about us?</div>
          <Select
            styles={customStyles }
            value={formData.selectedFind}
            placeholder="How did you hear about us"
            onChange={(selectedOption) => {
              setFormData(prevFormData => ({
                ...prevFormData,
                selectedFind: selectedOption
              }));
            }}
            options={[
              { value: "Website", label: "Website" },
              { value: "Google", label: "Google" },
              { value: "Instagram", label: "Instagram" },
            ]}
          />
        </div>
      </div>

      <div className="auth-button mt-10" onClick={handleContinue}>
   
        <div className="auth-button-text">
          {loading ? <Loader className="animate-spin" /> : 'Save & Continue'}
        </div>
      </div>

      <div
        className="flex items-center w-full justify-center mt-5 cursor-pointer "
        onClick={handleGoback}
      >
        <IoIosArrowRoundBack style={{ fontSize: "1.3rem", color: "#0B6ED0" }} />
        <div className="auth-button-go-back">Go back</div>
      </div>
      </div>
     
    </div>
  );
}

export default UserSubscriberCompany;

