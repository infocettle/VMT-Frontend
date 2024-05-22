import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

function UserLogin({ setFormType }) {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
    
  const handleContinue = () => {
    setFormType("otp");
  };
  const handleSignUp = () => {
    setFormType("signup");
  };

  return (
    <div className="auth-form-container">
      <div className="auth-header-text">Welcome to ValueMine</div>
      <div className="auth-subheader-text mt-3">
        Manage your financial and non-financial workflows seamlessly on the go
      </div>
     

      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Email </div>
          <input
            type="text"
            className="auth-input"
            placeholder="Example@gmail.com"
          />
        </div>
      
      </div>

      <div className="auth-form-flex">
        
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label mt-1">Password</div>

          <div className="password-input-container" style={{marginTop:"0px"}}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="6+ Characters"
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
        </div>
      </div>
      <div className="subscription-terms justify-between w-full">
        <div className="flex gap-2">
        <input type="checkbox"/>
          <div className="subscription-terms-text">Remember me</div>
        </div>

          <div className="subscription-terms-text"> <span>Forgot your password?</span></div>
          </div>
      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Login</div>
      </div>
      <div className="auth-already mt-5">New to ValueMine</div>

      <div className="auth-button-white mt-5" onClick={handleSignUp}>
        <div className="auth-button-white-text">Register an account</div>
      </div>
    </div>
  );
}

export default UserLogin;
