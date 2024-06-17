import { DashboardLinks } from "@/texts/dashboard";
import { BellDotIcon, UserRound } from "lucide-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileLogo from "../../assets/img/MobileLogo.svg";
import SystemLogo from "../../assets/img/SystemLogo.svg";
import Avatar from "../../assets/img/Avatar.svg";
import Menu from "../../assets/img/Menu.svg";
import "./main-dashboard.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuServer } from "react-icons/lu";
import { VscNote } from "react-icons/vsc";
import SearchBox from "@/components/SearchBox";
import { FaRegBell } from "react-icons/fa";
import Notification from "@/components/Notification";
import { MdSupportAgent } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
const MainDashboard = () => {
  const [showSubSide, setShowSubSide] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const handleHideSubSide = () => {
    setShowSubSide(!showSubSide);
  };
  const handleIconClick = () => {
    setIsOpenNotification(!isOpenNotification);
    setIsOpenProfile(false);
  };
  const handleProfileOpen = () => {
    setIsOpenProfile(!isOpenProfile);
    setIsOpenNotification(false);
  };
  const handleClose = () => {
    setIsOpenNotification(false);
  };

  return (
    <div className="w-full flex items-start overflow-hidden py-2 h-screen ">
      <div className="border-r h-screen flex flex-col  items-center ">
        <img src={MobileLogo} alt="image" className="p-2" />
        <div className="dasboard-side-image-container  h-screen flex gap-4 flex-col items-center">
          <div className="dasboard-side-image active-side">
            <LuServer />
          </div>
          <div className="dasboard-side-image">
            <VscNote />
          </div>
          <div className="dasboard-side-image">
            <MdOutlineDashboardCustomize />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start">
        <div className="w-full border-b pt-2 pb-3 px-4 flex items-center justify-between">
          <div className="w-auto flex items-center space-x-2">
            <img
              onClick={handleHideSubSide}
              src={Menu}
              alt="image"
              className="mr-3"
            />
            <h2>Dashboard</h2>
          </div>
          <div className="w-auto flex items-center space-x-2">
            <SearchBox />
          </div>
          <div className="w-auto flex items-center space-x-2 mr-6  overflow-hidden ">
            <FaRegBell
              onClick={handleIconClick}
              style={{
                fontSize: "1.4rem",
                color: "#666687",
                marginRight: "0.5rem",
                cursor: "pointer",
              }}
            />

            <div className=" w-full flex items-center gap-2 pl-3 border-l-2 cursor-pointer " onClick={handleProfileOpen}>
              <img src={Avatar} alt="image" />
              <p style={{ fontSize: "14px", color: "#666687" }}>VMT ADMIN</p>
            </div>
            <div className={`slide-in-box ${isOpenNotification ? "open" : ""}`}>
              <Notification onClose={handleClose} />
            </div>
            {isOpenProfile ? (<div className="profile-card-container">
              <div className="profile-info-container">
                <img src={Avatar} alt="image" />
                <div className="flex flex-col flex-wrap w-full">
                  <div className="profile-info-name">VMT ADMIN</div>
                  <div className="profile-info-email flex  flex-wrap">vmtadim@gmail.com</div>
                </div>
             
              </div>
              <div className="flex flex-col flex-wrap w-full">
                  <div className="flex gap-2 items-center border-b mb-3 border-b-gray-200 pb-3">
                  <MdSupportAgent />
                  <div className="help-container-text">Help & Support</div>
                  </div>
                  <div className="flex gap-2 items-center">
                  <LuLogOut />
                  <div className="help-container-text">Log out</div>
                  </div>
                </div>
            </div>): null}
            
          </div>
        </div>

        <div className="w-full flex items-start ">
          
          {!showSubSide ? (
            <div className="w-auto border-r h-screen flex flex-col items-start ">
              {DashboardLinks.map((eachLink) => (
                <div
                  className="w-auto flex items-start justify-between"
                  key={eachLink.id}
                >
                  {eachLink.component}
                </div>
              ))}
            </div>
          ) : null}

          <div className="xl:w-full overflow-x-scroll box-container-overall">
            <Outlet />
            <div className="w-full border-b py-5 px-4 flex items-center justify-between box-container-footer">
              <div className="footer-copyright">
                Copyright ©2023 <span>Valuemine.</span> All rights reserved
              </div>
              <div className="footer-links">
                <a href="#">Privacy</a>
                <a href="#" className="border-r-2 pl-2 border-l-2 pr-2">
                  Security
                </a>
                <a href="#">Service Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
