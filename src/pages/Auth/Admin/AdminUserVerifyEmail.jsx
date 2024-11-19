import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Logo from "../../../assets/img/Logo.svg";
import { baseUrl } from "@/App";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { sendData } from "@/hooks/usePostData";
import {
  // setSubscriber,
  setUserSubscriber,
} from "@/pages/Redux/authSubscriber.slice";

function AdminUserVerifyEmail({ setFormType, userEmail }) {
  const url = `${baseUrl}user/admin/auth/verify-otp`;
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState("");
  const dispatch = useDispatch();

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
      const returnedUser = await sendData({
        url: url,
        body: body,
        title: "Login",
        setLoading: setLoading,
      });
      console.log(returnedUser);
      dispatch(setUserSubscriber(returnedUser.newUser));
      // dispatch(setSubscriber(returnedUser.subscriber));
      setFormType("admin-user-new-password");
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleBack = () => {
    setFormType("admin-user-login");
  };

  return (
    <div className="auth-form-container">
      <div className="flex justify-center items-center w-full mb-10">
        <img src={Logo} alt="image" className="" />
      </div>
      <div className="auth-header-text w-full text-center">Verify Email</div>
      <div className="auth-subheader-text mt-7">
        A one time password has been sent to your email, please enter code below
        to confirm email and reset password
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
        <div className="auth-button-go-back">Go back to login</div>
      </div>
    </div>
  );
}

export default AdminUserVerifyEmail;
