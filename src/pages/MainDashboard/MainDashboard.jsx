import { DashboardLinks } from "@/texts/dashboard";
import { BellDotIcon, UserRound } from "lucide-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileLogo from "../../assets/img/MobileLogo.svg";
import SystemLogo from "../../assets/img/SystemLogo.svg";
import BaseLogo from "../../assets/img/BaseLogo.svg";
import Menu from "../../assets/img/Menu.svg";
import "./main-dashboard.css"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuServer } from "react-icons/lu";
import { VscNote } from "react-icons/vsc";
const MainDashboard = () => {
  const [showSubSide, setShowSubSide]= useState(false)

  const handleHideSubSide = () => {
      setShowSubSide(!showSubSide)

  }
  return (
    <div className="w-full flex items-start overflow-x-hidden p-2">
      <div className="border-r h-screen flex flex-col space-y-5 items-center " >
        <img src={MobileLogo} alt="image" />
        <div className="dasboard-side-image-container  h-screen flex flex-col space-y-5 items-center" >
          <div onClick={handleHideSubSide} className="dasboard-side-image">
              <LuServer  />
          </div>
          <div  className="dasboard-side-image">
      <VscNote />
          </div>
          <div  className="dasboard-side-image">
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
            <h3>Search</h3>
          </div>
          <div className="w-auto flex items-center space-x-2 mr-6">
            <BellDotIcon size={16} />
            <UserRound size={16} />
          </div>
        </div>

        <div className="w-full flex items-start">

          {
            !showSubSide ?(
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
            ):null
          }
        

          <div className="max-w-screen-xl xl:w-full overflow-x-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
