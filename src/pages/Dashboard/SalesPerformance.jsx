import SecondHeader from "@/components/SecondHeader";
import React, { useState } from "react";
import DashboardDiv from "./DashboardDiv";
import { IoFilter } from "react-icons/io5";
import { MdPointOfSale } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import "./dashboard.css";


import { Calendar } from "@/components/ui/calendar";
import { FaRegBell } from "react-icons/fa";
import Tables from "./Tables";

import SalesAnalyticsCharts from "./charts/SalesAnalyticsCharts";
import MonthlyRevenueChart from "./charts/MonthlyRevenueChart";
import SalesUnit from "./components/SalesUnit";
import AccountRetention from "./components/AcoountRetention";
import TransactionHistory from "./components/TransactionHistory";

const SalesPerformance = () => {
  const [open, setIsOpen] = useState(false);
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="w-full">
      <DashboardDiv module={"Performance"} />
      <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <div className="main-container">
          <div className="filter-button-container justify-between">
          <h2 className="uppercase performance_header">Sales</h2>
              {/* <div className="filter-button">
                <IoFilter />
                <div className="filter-button-text">Filter</div>
              </div> */}
            </div>
            <div className="dashboard-cards-container">
              <div className="cards-container">
                <div className="cards-container-header">
                 
                  <div className="cards-container-header-text">REVENUE</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">
                    ₦12,234,657.00
                  </div>
                  <div className="cards-container-footer-flex">
                    <div className="cards-container-footer-flex-success">
                      <RiArrowUpSFill />
                      <div className="cards-container-footer-flex-success-text">
                        4.25%
                      </div>
                    </div>
                    <div className="cards-container-footer-flex-text">
                      Since last week
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards-container">
                <div className="cards-container-header">
                
                  <div className="cards-container-header-text">TRANSACTION</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">124</div>
                  <div className="cards-container-footer-flex">
                    <div className="cards-container-footer-flex-success">
                      <RiArrowUpSFill />
                      <div className="cards-container-footer-flex-success-text">
                        4.54%
                      </div>
                    </div>
                    <div className="cards-container-footer-flex-text">
                      Since last week
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards-container">
                <div className="cards-container-header">
                 
                  <div className="cards-container-header-text">CONVERSION RATE</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">1.2</div>
                  <div className="cards-container-footer-flex">
                    <div className="cards-container-footer-flex-success">
                      <RiArrowUpSFill />
                      <div className="cards-container-footer-flex-success-text">
                        4.25%
                      </div>
                    </div>
                    <div className="cards-container-footer-flex-text">
                      Since last week
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards-container">
                <div className="cards-container-header">
                 
                  <div className="cards-container-header-text">SUBSCRIBERS</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">124</div>
                  <div className="cards-container-footer-flex">
                    <div className="cards-container-footer-flex-success">
                      <RiArrowUpSFill />
                      <div className="cards-container-footer-flex-success-text">
                        4.25%
                      </div>
                    </div>
                    <div className="cards-container-footer-flex-text">
                      Since last week
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="dashboard-section">
              <div className="dashboard-section-one" style={{ width: "100%" }}>
                <div className="card-header">
                  <div className="card-header-text">MONTHLY REVENUE</div>
                </div>
                <MonthlyRevenueChart/>
              </div>
              <div className="dashboard-section-two" style={{ width: "100%" }}>
                <div className="card-header">
                  <div className="card-header-text">SALES ANALYTICS</div>
                </div>
                <SalesAnalyticsCharts/>
              </div>
            </div>

            <div className="dashboard-section">
             <SalesUnit/>
             <AccountRetention/>
             <TransactionHistory/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPerformance;
