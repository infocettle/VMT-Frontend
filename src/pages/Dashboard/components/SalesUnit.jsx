import React from "react";
import Tables from "../Tables";
import { Progress } from "@/components/ui/progress"

function SalesUnit() {
  return (
    <div className="dashboard-section-one" style={{ width: "100%" }}>
      <div className="card-header">
        <div className="card-header-text">SALES UNIT</div>
      </div>
      <div className="sales-unit-container">
        <div className="sales-unit">
          <div className="flex justify-between w-full">
            <div className="sales-unit-header">Sales</div>
            <div className="sales-unit-percentage">78%</div>
          </div>
          <Progress value={78} color="
rgba(136, 106, 228, 1)" />

        </div>
        <div className="sales-unit">
          <div className="flex justify-between w-full">
            <div className="sales-unit-header">Manufacturing</div>
            <div className="sales-unit-percentage">45%</div>
          </div>
          <Progress value={45} color="
rgba(208, 43, 32, 1)" />

        </div>
        <div className="sales-unit">
          <div className="flex justify-between w-full">
            <div className="sales-unit-header">Marketing</div>
            <div className="sales-unit-percentage">63%</div>
          </div>
          <Progress value={63} color="rgba(148, 82, 74, 1)" />

        </div>
        <div className="sales-unit">
          <div className="flex justify-between w-full">
            <div className="sales-unit-header">Finance</div>
            <div className="sales-unit-percentage">84%</div>
          </div>
          <Progress value={84} color="rgba(201, 66, 183, 1)" />

        </div>
      </div>
    </div>
  );
}

export default SalesUnit;
