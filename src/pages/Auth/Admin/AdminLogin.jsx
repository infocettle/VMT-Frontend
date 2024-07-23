import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Logo from "../../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";
function AdminLogin({ setFormType }) {
  const url = `${baseUrl}/admin/auth/login`;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  
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
    navigate('/admin-dashboard')
  };
  const handleReset = () => {
    setFormType("admin-forgot-password");
  };
 

  return (
    <div className="auth-form-container">
        <div className="flex justify-center items-center w-full mb-10">
      
<img src={Logo} alt="image" className="" />      
        </div>

      <div className="auth-header-text text-center w-full mb-4">Admin Login</div>
    
     

      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Email Address </div>
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

          <div className="subscription-terms-text cursor-pointer" onClick={handleReset}> <span>Forgot your password?</span></div>
          </div>
      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">Login</div>
      </div>
     
    </div>
  );
}

export default AdminLogin;
