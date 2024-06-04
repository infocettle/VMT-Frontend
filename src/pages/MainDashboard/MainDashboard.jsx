import { DashboardLinks } from "@/texts/dashboard";
import { BellDotIcon, UserRound } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

const MainDashboard = () => {
  return (
    <div className="w-full flex items-start overflow-x-hidden p-2">
      <div className="w-18 border-r h-screen flex flex-col space-y-5 items-center p-2">
        <h2>Logo</h2>
        <h2>icon1</h2>
        <h2>icon2</h2>
        <h2>icon3</h2>
      </div>

      <div className="w-full flex flex-col items-start">
        <div className="w-full border-b py-2 px-4 flex items-center justify-between">
          <div className="w-auto flex items-center space-x-2">
            <h2>icon menu</h2>
            <h2>Public Registry</h2>
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

          <div className="max-w-screen-xl xl:w-full overflow-x-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
