import { baseUrl } from "@/App";
import { sendData } from "@/hooks/usePostData";
import React, { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Loader } from 'lucide-react';
import { setUserSubscriber } from "@/pages/Redux/authSubscriber.slice";
function UserLogin({ setFormType ,setUserEmail}) {
  const url = `${baseUrl}v1/auth/login`;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    setUserEmail(email);
  }, [email]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        console.log(returnedUser);
        dispatch(setUserSubscriber(returnedUser.user));
      setFormType("otp");
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleReset = () => {
    setFormType("reset-password");
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
          <div className="auth-label">Email</div>
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
          <div
            className="password-input-container"
            style={{ marginTop: "0px" }}
          >
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
          <input type="checkbox" />
          <div className="subscription-terms-text">Remember me</div>
        </div>
        <div
          className="subscription-terms-text cursor-pointer"
          onClick={handleReset}
        >
          <span>Forgot your password?</span>
        </div>
      </div>

      <div className="auth-button mt-10" onClick={handleContinue}>
      <div className="auth-button-text">
          {loading ? <Loader className="animate-spin" /> : 'Login'}
        </div>
      </div>
      <div className="auth-already mt-5">New to ValueMine</div>
      <div className="auth-button-white mt-5" onClick={handleSignUp}>
        <div className="auth-button-white-text">Register an account</div>
      </div>
    </div>
  );
}

export default UserLogin;
