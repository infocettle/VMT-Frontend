import SecondHeader from "@/components/SecondHeader";
import React, { useState } from "react";
import DashboardDiv from "./DashboardDiv";
import { IoFilter } from "react-icons/io5";
import { MdPointOfSale } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import "./dashboard.css";


import { Calendar } from "@/components/ui/calendar"
import { FaRegBell } from "react-icons/fa";
import Tables from "./Tables";
import ActiveUsersChart from "./charts/ActiveUsersChart";
import TopSubscriptionChart from "./charts/TopSubscribtionsChart";
import TransactionHistoryTable from "./TransactionHistoryTable";
import MonthlyRevenueChart from "./charts/MonthlyRevenueChart";
import WorldMapChart from "./charts/WorldMapChart";
import ActiveAgentChart from "./charts/ActiveAgentCharts";

const PartnersPerformance = () => {
  const [open, setIsOpen] = useState(false);
  const [date, setDate] = React.useState(new Date())
  return (
    <div className="w-full">
      <DashboardDiv module={"Performance"} />
      <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <div className="main-container">
          <div className="filter-button-container justify-between">
          <h2 className="uppercase performance_header">Partners</h2>
              {/* <div className="filter-button">
                <IoFilter />
                <div className="filter-button-text">Filter</div>
              </div> */}
            </div>
            <div className="dashboard-cards-container">
              <div className="cards-container">
                <div className="cards-container-header">
                  {/* <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div> */}
                  <div className="cards-container-header-text">CONSULTANTS</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">
                   28
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
                 
                  <div className="cards-container-header-text">AGENTS</div>
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
                 
                  <div className="cards-container-header-text">PROSPECTS REGISTERED</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">46</div>
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
                  <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div>
                  <div className="cards-container-header-text">INVESTORS</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">28</div>
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
              <div className="dashboard-section-one" style={{width:"100%"}}>
                <div className="card-header">
                  <div className="card-header-text">ACTIVE AGENTS</div>
            
                </div>
                <ActiveAgentChart/>
              </div>
              <div className="dashboard-section-two" style={{width:"100%"}}>
                <div className="card-header">
                  <div className="card-header-text">GEOGRAPHICAL DISTRIBUTION</div>
                 
                </div>
                <div className="sales-unit-container">
                <WorldMapChart/>
                </div>
              </div>
            </div>
           
            <div className="dashboard-section">

            <div className="dashboard-section-one" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">RECENT PROSPECTS ADDED</div>
                </div>
                <div className="sales-unit-container">

                      <Tables/>
                  </div>
              
            </div>
            <div className="dashboard-section-two" style={{width:"100%"}}>
            <div className="card-header">
            <div className="card-header-text"> RECENT INVESTORS</div>
                </div>
                <div className="sales-unit-container">
  <TransactionHistoryTable/>
                  </div>
                
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPerformance;
