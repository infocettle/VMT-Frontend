import { ChevronRight } from "lucide-react";

const DashboardDiv = ({ module }) => {
  return (
    <div className="w-full large_screen">
      {/* The div that renders Dashbaord flex */}
      <div className="w-full h-auto border border-gray-200 flex flex-col items-center">
        {/* Header Kinda */}
        <div className="w-full py-3 pl-9 pr-12 flex items-center justify-between">
          <h2 className="dashboard-div-text uppercase">{module}</h2>
          <div className="flex w-auto space-x-2 items-center">
            <h2 className="dashboard-div-text-two">Dashboard</h2>
            <ChevronRight color="#000" size={16} />
            <h2 className="dashboard-div-text-three">{module}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDiv;
