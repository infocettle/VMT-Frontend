import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function NewPassword({setFormType}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successState, setSucessState] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
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

  
  const handleSuccessful = () => {
    setSucessState(true);
  };
  const handleContinue = () => {
    setFormType("login-user");
  };

  const handleGoback = () => {
    setFormType("verify-email");
  };
  return (
    <div className="auth-form-container">
      {!successState ? (
        <>
          <div className="auth-header-text">Reset Password</div>
          <div className="auth-subheader-text mt-7">
            create a strong password to protect your account
          </div>
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
          <div className="auth-button mt-10" onClick={handleSuccessful}>
            <div className="auth-button-text">Submit</div>
          </div>
          <div
            className="flex items-center w-full justify-center mt-5 cursor-pointer "
            onClick={handleGoback}
          >
            {/* <IoIosArrowRoundBack style={{fontSize:"1.3rem",color:"#0B6ED0"}} /> */}
            <div className="auth-button-go-back">Go back</div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <div className="auth-header-text">Password Reset Successfully</div>
          <div className="auth-subheader-text mt-4 text-center">
          Your password reset was successful. Please contact our support team if you need any clarification
          </div>
          <div className="auth-button mt-5" onClick={handleContinue}>
            <div className="auth-button-text">Submit</div>
          </div>
      </div>
      )}
    </div>
  );
}

export default NewPassword;
