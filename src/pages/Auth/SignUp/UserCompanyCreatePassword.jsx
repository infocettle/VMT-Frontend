import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import MobileLogo from "../../../assets/img/MobileLogo.svg";
import { toast } from "react-toastify";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";
import axios from "axios";
import { sendData } from "@/hooks/usePostData";

function UserCompanyCreatePassword({userType}) {
  const profileData = useSelector((state) => state.auth);
  const newUserId = profileData?.newUser?._id;
  const url = `${baseUrl}v1/${userType}/company/auth/set-password/${newUserId}`;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState(["", "", ""]);
  const navigate = useNavigate();

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

  const handleAnswerChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
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

  const validateForm = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }
    if (selectedQuestions.length < 3 || answers.some((answer) => !answer)) {
      toast.error("Please complete all security questions.");
      return false;
    }
    return true;
  };

  const handleContinue = async () => {
    if (!validateForm()) {
      return;
    }

    const requestBody = {
      password: password,
      confirmPassword: confirmPassword,
      securityQuestions1: [
        {
          question: selectedQuestions[0]?.label,
          answer: answers[0],
        },
      ],
      securityQuestions2: [
        {
          question: selectedQuestions[1]?.label,
          answer: answers[1],
        },
      ],
      securityQuestions3: [
        {
          question: selectedQuestions[2]?.label,
          answer: answers[2],
        },
      ],
    };

    try {
      await sendData({
        url: url,
        body: requestBody,
        title: "Password and security questions set",
      });
     
      navigate("/subscription");
    } catch (error) {
      const errorBody = error.response?.data || { detail: error.message };
      console.error(errorBody);
      toast.error(`Error: ${errorBody.detail}`, {
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  const handleGoback = () => {
    // Handle go back logic here if needed
  };

  return (
    <div className="auth-form-container">
      <div className="auth-logo-two">
        <img src={MobileLogo} alt="image" />
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
      </div>

      <div className="auth-label my-4">Security Questions</div>
      <div className="w-full">
        {[0, 1, 2].map((index) => (
          <div key={index} className="w-full">
            <div className="auth-label">{`Question ${index + 1}`}
              <span className="auth-mandatory">*</span>
            </div>
            <Select
              options={filteredOptions(index)}
              value={selectedQuestions[index]}
              styles={customStyles}
              onChange={(selectedOption) =>
                handleQuestionSelect(selectedOption, index)
              }
              placeholder={`Select Question ${index + 1}`}
            />
            <input
              type="text"
              className="auth-input my-4 w-full"
              placeholder="Answer"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(e, index)}
            />
          </div>
        ))}
      </div>

      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Submit</div>
      </div>

      <div
        className="flex items-center w-full justify-center mt-5 cursor-pointer"
        onClick={handleGoback}
      >
        <div className="auth-button-go-back">Go back</div>
      </div>
    </div>
  );
}

export default UserCompanyCreatePassword;
