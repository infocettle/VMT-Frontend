


import SecondHeader from "@/components/SecondHeader";
import { useState } from "react";
import DashboardDiv from "./DashboardDiv";



const Overview = () => {
  const [open, setIsOpen] = useState(false);


  return (
    <div className="w-full">
      <DashboardDiv module={"Overview"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
         

       
        </div>


      
      </div>
    </div>
  );
};

export default Overview;
