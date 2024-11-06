import { baseUrl } from "@/App";
import { sendData } from "@/hooks/usePostData";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import { Loader } from 'lucide-react';
function ResetPassword({ setFormType,setUserEmail }) {
  const url = `${baseUrl}auth/forgot-password`;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
   setUserEmail(email);
  }, [email])
  
  const validateForm = () => {
    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }

    return true;
  };
  const handleContinue = async () => {
    if (!validateForm()) return;

    const body = {
      email: email,
    };

    try {
      await sendData({
        url: url,
        body: body,
        title: "Verication code sent",
        setLoading: setLoading 
      });
      setFormType("verify-email");
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleBack = () => {
    setFormType("login-user");
  };

  return (
    <div className="auth-form-container">
      <div className="auth-header-text">Reset password</div>

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

      <div className="auth-button mt-10" onClick={handleContinue}>
      <div className="auth-button-text">
          {loading ? <Loader className="animate-spin" /> : 'Submit'}
        </div>
      </div>

      <div
        className="flex items-center w-full justify-center mt-5 cursor-pointer "
        onClick={handleBack}
      >
        <IoIosArrowRoundBack style={{ fontSize: "1.3rem", color: "#0B6ED0" }} />
        <div className="auth-button-go-back">Go back to login</div>
      </div>
    </div>
  );
}

export default ResetPassword;
