import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Logo from "../../../assets/img/Logo.svg";
import { useSelector } from "react-redux";
import { baseUrl } from "@/App";
function AdminUserNewPassword({setFormType,userEmail}) {
  const url = `${baseUrl}user/admin/auth/reset-password`;
  const token = useSelector((state) => state.auth.token);
  const [loading, setLoading] = useState(false);
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

  const validateForm = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }
   
    return true;
  };
  const handleSuccessful = async() => {
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    const body = {
      email: userEmail,
     password : password,
     confirmPassword : confirmPassword

    };
 
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setLoading(false)
    console.log(result)
   
      setSucessState(true);
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleContinue = () => {
    setFormType("admin-user-login");
  };

  const handleGoback = () => {
    setFormType("verify-email");
  };
  return (
    <div className="auth-form-container">
          <div className="flex justify-center items-center w-full mb-10">
      
      <img src={Logo} alt="image" className="" />      
              </div>
      {!successState ? (
        <>
          <div className="auth-header-text text-center w-full">Reset Password</div>
          <div className="auth-subheader-text mt-3 text-center w-full">
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
            <div className="auth-button-text">Confirm</div>
          </div>
         
        </>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <div className="auth-header-text">Password Reset Successfully</div>
          <div className="auth-subheader-text mt-4 text-center">
          Your password reset was successful. Please contact our support team if you need any clarification
          </div>
          <div className="auth-button mt-5" onClick={handleContinue}>
            <div className="auth-button-text">Go to login</div>
          </div>
      </div>
      )}
    </div>
  );
}

export default AdminUserNewPassword;
