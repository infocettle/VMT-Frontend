import React, { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Logo from "../../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "@/App";
import { Loader } from 'lucide-react';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { sendData } from "@/hooks/usePostData";
import { setSubscriber, setUserSubscriber } from "@/pages/Redux/authSubscriber.slice";
function AdminUserLogin({ setFormType,setUserEmail }) {
  const url = `${baseUrl}user/admin/auth/login`;
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setUserEmail(email);
     }, [email])
  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    
      const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    
       
      };
      const validateForm = () => {
        if (!email.trim()) {
          toast.error("Email is required");
          return false;
        }
        if (!password.trim()) {
          toast.error("Password is required");
          return false;
        }
        return true;
      };
  const handleContinue = async () => {
    if (!validateForm()) return;

    const body = {
      email: email,
      password: password,
    };

    try {
      const returnedUser = await sendData({
        url: url,
        body: body,
        title: "OTP sent to your mail",
        setLoading: setLoading 
      });
      dispatch(setUserSubscriber(returnedUser.user));
      dispatch(setSubscriber(returnedUser.subscriber));
    setFormType('admin-user-verify-login')
  } catch (error) {
    console.error("error", error);
  }
  };
  const handleReset = () => {
    setFormType("admin-user-reset-password");
  };
 

  return (
    <div className="auth-form-container">
        <div className="flex justify-center items-center w-full mb-10">
      
<img src={Logo} alt="image" className="" />      
        </div>

      <div className="auth-header-text text-center w-full mb-4">Admin User Login</div>
    
     

      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">Email Address </div>
          <input
            type="text"
            className="auth-input"
            placeholder="Example@gmail.com"
            value={email}
            onChange={handleEmailChange}
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
      <div className="auth-button-text">
          {loading ? <Loader className="animate-spin" /> : 'Login'}
        </div>
      </div>
     
    </div>
  );
}

export default AdminUserLogin;
