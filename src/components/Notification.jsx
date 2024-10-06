import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import SearchBox from "./SearchBox";
import { IoClose } from "react-icons/io5";
function Notification({ onClose }) {
  return (
    <div>
      <div
        className="dashboard-section-one notification-section"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="notification-side-header">Notification</div>
          <div className="notification-side-close" onClick={onClose}>
            <IoClose />
          </div>
        </div>
        <div className="w-full flex items-center justify-between my-2">
          <div style={{ width: "45%" }}>
            <SearchBox />
          </div>
          <div className="filter-button">
            <div className="filter-button-text">Filter</div>
            <IoFilter />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
        <div className="notification-container">
          <div className="notification-text-container">
            <div className="notification-text-header">Info Notification </div>
            <div className="notification-text-subheader">
              # <span>1626249741</span> created a subscriber account
            </div>
          </div>
          <div className="notification-icon-box">
            <FaRegBell />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
