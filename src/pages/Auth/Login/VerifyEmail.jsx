import { baseUrl } from "@/App";
import { sendData } from "@/hooks/usePostData";
import { setTokenSubscriber } from "@/pages/Redux/authSubscriber.slice";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

function VerifyEmail({ setFormType, userEmail }) {
  const url = `${baseUrl}auth/verify-otp`;
  const [otp, setOTP] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    if (!otp.trim()) {
      toast.error("otp is required");
      return false;
    }

    return true;
  };

  const handleContinue = async () => {
    if (!validateForm()) {
      return;
    }
    const body = {
      email: userEmail,
      otp: otp,
    };

    try {
      const returnedToken = await sendData({
        url: url,
        body: body,
        title: "OTP verification",
        setLoading: setLoading,
      });
      dispatch(setTokenSubscriber(returnedToken.resetToken));
      setFormType("new-password");
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleBack = () => {
    setFormType("reset-password");
  };

  return (
    <div className="auth-form-container">
      <div className="auth-header-text">Verify Email</div>
      <div className="auth-subheader-text mt-7">
        A one time password has been sent to your email, please enter code below
        to confirm email and reset password.
      </div>

      <div className="auth-form-flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="auth-label">OTP code </div>
          <input
            type="text"
            className="auth-input"
            placeholder="--- ---"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
        </div>
      </div>

      <div className="auth-button mt-10" onClick={handleContinue}>
        <div className="auth-button-text">
          {loading ? <Loader className="animate-spin" /> : "Confirm"}
        </div>
      </div>

      <div
        className="flex items-center w-full justify-center mt-5 cursor-pointer "
        onClick={handleBack}>
        <IoIosArrowRoundBack style={{ fontSize: "1.3rem", color: "#0B6ED0" }} />
        <div className="auth-button-go-back">Go back</div>
      </div>
    </div>
  );
}

export default VerifyEmail;
