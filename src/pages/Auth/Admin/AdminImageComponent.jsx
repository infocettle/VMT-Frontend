import React from "react";
import "../auth.css";


function AdminImageComponent({image}) {
  return (
    <div className="image-auth-logo">
      
      <div className="auth-banner-image-con" >
      <img src={image} alt="image" className="auth-banner-image" />

      </div>

    </div>
  );
}

export default AdminImageComponent;
