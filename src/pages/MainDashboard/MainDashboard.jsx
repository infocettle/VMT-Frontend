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
const MainDashboard = () => {
  const [showSubSide, setShowSubSide] = useState(false);

  const handleHideSubSide = () => {
    setShowSubSide(!showSubSide);
  };
  return (
    <div className="w-full flex items-start overflow-x-hidden p-2">
      <div className="border-r h-screen flex flex-col space-y-5 items-center ">
        <img src={MobileLogo} alt="image" />
        <div className="dasboard-side-image-container  h-screen flex flex-col space-y-5 items-center">
          <div onClick={handleHideSubSide} className="dasboard-side-image">
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
        <div className="w-full border-b py-2 px-4 flex items-center justify-between">
          <div className="w-auto flex items-center space-x-2">
            <img src={Menu} alt="image" className="mr-3" />
            <h2>Dashboard</h2>
          </div>
          <div className="w-auto flex items-center space-x-2">
            <SearchBox />
          </div>
          <div className="w-auto flex items-center space-x-2 mr-6">
            <FaRegBell
              style={{
                fontSize: "1.4rem",
                color: "#666687",
                marginRight: "0.5rem",
              }}
            />

            <div className=" w-full flex items-center gap-2 pl-3 border-l-2 ">
              <img src={Avatar} alt="image" />
              <p style={{ fontSize: "14px", color: "#666687" }}>VMT ADMIN</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start">
          {!showSubSide ? (
            <div className="w-auto border-r h-screen flex flex-col items-start">
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

          <div className="max-w-screen-xl xl:w-full overflow-x-scroll">
            <Outlet />
            <div className="w-full border-b py-5 px-4 flex items-center justify-between ">
            <div className="footer-copyright">
            Copyright ©2023 <span>Valuemine.</span> All rights reserved
            </div>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#" className="border-r-2 pl-2 border-l-2 pr-2">Security</a>
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
