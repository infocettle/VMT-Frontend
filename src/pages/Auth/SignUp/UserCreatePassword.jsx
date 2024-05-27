import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import MobileLogo from "../../../assets/img/MobileLogo.svg";
function UserCreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword !== confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const securityQuestionOptions = [
    { value: "nickname", label: "What is your nickname as a child?" },
    { value: "firstPet", label: "What is the name of your first pet?" },
    {
      value: "bestFriend",
      label: "What is the name of your childhood best friend?",
    },
    { value: "firstCar", label: "What is the name of your first car?" },
    { value: "motherMaidenName", label: "What is your mother’s maiden name?" },
    {
      value: "favoriteCelebrity",
      label: "What is the name of your favorite celebrity?",
    },
    {
      value: "firstDaughter",
      label: "What is the name of your first daughter?",
    },
  ];

  const handleQuestionSelect = (selectedOption, questionIndex) => {
    const updatedQuestions = [...selectedQuestions];
    updatedQuestions[questionIndex] = selectedOption;
    setSelectedQuestions(updatedQuestions);
  };

  // Filter out already selected options for the specific question
  const filteredOptions = (questionIndex) => {
    const selectedQuestionValues = selectedQuestions.map(
      (question) => question?.value
    );
    return securityQuestionOptions.filter(
      (option) => !selectedQuestionValues.includes(option.value)
    );
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "48px",
      height: "48px",
      marginTop: ".3rem",
    }),
  };
  const handleContinue = () => {
    navigate("/subscription")
  };

  const handleGoback = () => {
    setFormType("user-subscriber");
  };
  return (
    <div className="auth-form-container">
         <div className="auth-logo-two">
     <img src={MobileLogo} alt="image"/>
</div> 
      <div className="auth-header-text">Secure your account</div>

      <div className="auth-label mt-4">Password</div>

      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
        />
        <button
          onClick={togglePasswordVisibility}
          className="toggle-password-button"
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>

      <div className="auth-label mt-4">Confirm Password</div>
      <div className="password-input-container">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="password-input"
        />
        <button
          onClick={toggleConfirmPasswordVisibility}
          className="toggle-password-button"
        >
          {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
        </button>
        {/* {passwordMatchError && <p className="error-message">Passwords do not match</p>} */}
      </div>

      <div className="auth-label my-4">Security Questions</div>
      <div className="w-full">
        {[0, 1, 2].map((index) => (
          <div key={index} className="w-full">
            <div className="auth-label">{`Question ${index + 1}`}<span className="auth-mandatory">*</span></div>
            <Select
              options={filteredOptions(index)}
              value={selectedQuestions[index]}
              styles={customStyles}
              onChange={(selectedOption) =>
                handleQuestionSelect(selectedOption, index)
              }
              placeholder={`Select Question ${index + 1}`}
            />
            <input type="text" className="auth-input my-4 w-full" placeholder="Answer" />
          </div>
        ))}
      </div>

      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Submit</div>
      </div>

      <div className="flex items-center w-full justify-center mt-5 cursor-pointer " onClick={handleGoback}>
      {/* <IoIosArrowRoundBack style={{fontSize:"1.3rem",color:"#0B6ED0"}} /> */}
        <div className="auth-button-go-back">Go back</div>
      </div>
    </div>
  );
}

export default UserCreatePassword;
