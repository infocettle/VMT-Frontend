import { DashboardLinks } from "@/texts/dashboard";
import { BellDotIcon, UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MobileLogo from "../../assets/img/MobileLogo.svg";
import "../../texts/print.css";
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
import DashboardDivTwo from "../Dashboard/DashboardDivTwo";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserSubscriber } from "../Redux/authSubscriber.slice";
const MainDashboard = () => {
  const [showSubSide, setShowSubSide] = useState(true);
  const userData = useSelector((state) => state.auth.user);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [pageHeader, setPageHeader] = useState("");
  const [showFooter, setShowFooter] = useState(true);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = location.pathname; // Or location.href if needed
    console.log(url, "url");
    if (url.includes("dashboard")) {
      setPageHeader("Dashboard");
    } else if (url.includes("public_reg")) {
      setPageHeader("Public Registry");
    } 
    else if (url?.includes("services")) {
      setPageHeader("Services");
      if (url?.includes("newtype") || url?.includes("documentinformation")) { 
        setShowFooter(false)
      }
      else{
        setShowFooter(true)
      }
    }
    else {
      setPageHeader("Dashboard"); // Default or other cases
      setShowFooter(true)
    }
  }, [location]);
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
  const handleLogOut = () => {
    dispatch(logOutUserSubscriber());
    console.log("hello");
  };

  return (
    <div className="relative w-full flex items-start overflow-hidden pb-2 h-screen ">
      <div className="border-r h-screen flex flex-col  items-center large_screen">
        <img src={MobileLogo} alt="image" className="p-2" />
        <div className="dasboard-side-image-container h-screen flex flex-col space-y-5 items-center">
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
      <div className="flex flex-col w-full">
        <div className="small_screen justify-between items-center w-full border-b border-b-gray-100">
          <div className="flex">
            <img src={MobileLogo} alt="image" className="p-2" />
          </div>
          <div className="flex">
            <img
              src={Avatar}
              alt="image"
              className="pr-2"
              onClick={handleProfileOpen}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start">
          <div className="w-full border-b pt-2 pb-3 px-2 lg:px-4 flex items-center justify-between">
            <div className="w-auto flex items-center lg:space-x-2">
              <img
                onClick={handleHideSubSide}
                src={Menu}
                alt="image"
                className="mr-1 lg:mr-3"
              />
              <h2 className="main-dashbaord-header">
                {pageHeader.toUpperCase()}
              </h2>
            </div>
            <div className="w-auto flex items-center space-x-2 large_screen">
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
                className="large_screen"
              />

              <div
                className=" w-full flex items-center gap-2 pl-3 border-l-2 cursor-pointer large_screen"
                onClick={handleProfileOpen}
              >
                <img src={Avatar} alt="image" />
                <p style={{ fontSize: "14px", color: "#666687" }}>
                  {userData?.surname.toUpperCase()}{" "}
                  {userData?.firstName.toUpperCase()}{" "}
                </p>
              </div>
              <div
                className={`slide-in-box ${isOpenNotification ? "open" : ""}`}
              >
                <Notification onClose={handleClose} />
              </div>
              {isOpenProfile ? (
                <div className="profile-card-container">
                  <div className="profile-info-container">
                    <img src={Avatar} alt="image" />
                    <div
                      className="flex flex-col flex-wrap w-full pr-3"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <div className="profile-info-name">
                        {userData?.surname.toUpperCase()}{" "}
                        {userData?.firstName.toUpperCase()}
                      </div>
                      <div className="profile-info-email flex  flex-wrap ">
                        {userData?.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap w-full">
                    <div className="flex gap-2 items-center border-b mb-3 border-b-gray-200 pb-3">
                      <MdSupportAgent />
                      <div className="help-container-text">Help & Support</div>
                    </div>
                    <div
                      className="flex gap-2 items-center cursor-pointer"
                      onClick={handleLogOut}
                    >
                      <LuLogOut />
                      <div className="help-container-text">Log out</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="small_screen">
              <DashboardDivTwo />
            </div>
          </div>

          <div className="w-full flex items-start side-position">
            {!showSubSide ? (
              <div className="w-auto border-r h-screen flex flex-col items-start side-position-first">
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

            <div className="relative xl:w-full overflow-x-scroll box-container-overall">
              <Outlet />
              {showFooter &&
                <div className="w-full border-b py-5 px-4 flex items-center justify-between box-container-footer large_screen">
                  <div className="footer-copyright">
                    Copyright ©2023 <span>Valuemine.</span> All rights reserved
                  </div>
                  <div className="footer-links mr-5">
                    <a href="#">Privacy</a>
                    <a href="#" className="border-r-2 pl-2 border-l-2 pr-2">
                      Security
                    </a>
                    <a href="#">Service Terms</a>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
