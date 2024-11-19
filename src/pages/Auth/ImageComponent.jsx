import React from "react";
import "./auth.css";
import AuthImage from "../../assets/img/AuthImage.svg";
import Logo from "../../assets/img/Logo.svg";
function ImageComponent() {
  return (
    <div className="image-auth-logo">
      <img src={Logo} alt="image" className="pl-10 mt-10" />
      <div className="auth-banner-image-con" >
      <img src={AuthImage} alt="image" className="auth-banner-image" />

      </div>
      <div className="image-auth-text">ERP for Micro, Small and Medium Entities</div>
    </div>
  );
}

export default ImageComponent;
