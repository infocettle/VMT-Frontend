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
import SalesOverviewChart from "./charts/SalesOverviewChart";
import RevenueChart from "./charts/RevenueChart";
import DailySummaryChart from "./charts/DailySummaryChart";
import PendingTable from "./PendingTable";

const CompanyPerformance = () => {
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
          <h2 className="uppercase performance_header">Company</h2>
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
                  <div className="cards-container-header-text">SUBSCRIPTIONS</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">
            280
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
               
                  <div className="cards-container-header-text">INCOME</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">        ₦12,234,657.00</div>
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
                  
                  <div className="cards-container-header-text">EXPENSE</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">24</div>
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
                  <div className="cards-container-header-text">PROFIT</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">        ₦12,234,804.00</div>
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
              <div className="dashboard-section-one" >
                <div className="card-header">
                  <div className="card-header-text">REVENUE</div>
                  <div className="filter-button-container">
              <div className="filter-button">
                <div className="filter-button-text">2023</div>
                <IoFilter />
              </div>
            </div>
                </div>
                <RevenueChart/>
              </div>
              <div className="dashboard-section-two" >
                <div className="card-header">
                  <div className="card-header-text">DAILY SUMMARY</div>
                  <div className="filter-button-container">
              <div className="filter-button">
                <div className="filter-button-text">2023</div>
                <IoFilter />
              </div>
            </div>
                </div>
                <DailySummaryChart/>
              </div>
            </div>
           
            <div className="dashboard-section">

            <div className="dashboard-section-one" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">RECENT ORDERS</div>
                </div>
                <div className="sales-unit-container">
                         <PendingTable/>
                </div>
           
            </div>
            <div className="dashboard-section-two" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">TRANSACTION HISTORY</div>
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

export default CompanyPerformance;
