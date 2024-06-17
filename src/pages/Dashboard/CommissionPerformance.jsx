import SecondHeader from "@/components/SecondHeader";
import React, { useState } from "react";
import DashboardDiv from "./DashboardDiv";
import { IoFilter } from "react-icons/io5";
import { MdPointOfSale } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import "./dashboard.css";

import  PaymentsPieChart  from "./charts/PaymentsPieChart";
import { Calendar } from "@/components/ui/calendar"
import { FaRegBell } from "react-icons/fa";
import Tables from "./Tables";
import ActiveUsersChart from "./charts/ActiveUsersChart";
import TopSubscriptionChart from "./charts/TopSubscribtionsChart";
import CommissionPayableChart from "./charts/CommissionPayableChart";
import SalesAmountChart from "./charts/SalesAmountChart";
import CommissionPartnerChart from "./charts/CommissionPartnerChart";

const CommissionPerformance = () => {
  const [open, setIsOpen] = useState(false);
  const [date, setDate] = React.useState(new Date())
  return (
    <div className="w-full">
      <DashboardDiv module={"Overview"} />
      <div className="bg-gray-100 py-3 scrolled-height px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <div className="main-container">
          <div className="filter-button-container justify-between">
              <h2 className="uppercase font-light text-base">Commission</h2>
              {/* <div className="filter-button">
                <IoFilter />
                <div className="filter-button-text">Filter</div>
              </div> */}
            </div>
            <div className="dashboard-cards-container">
              <div className="cards-container">
                <div className="cards-container-header">
                 
                  <div className="cards-container-header-text">SALES AMOUNT</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">
                    ₦35,657,804.00
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
                 
                  <div className="cards-container-header-text">AVG. COMMISSION RATE</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">4.3%</div>
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
                  {/* <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div> */}
                  <div className="cards-container-header-text">TOTAL COMMISSION</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">N657,804.00</div>
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
                  {/* <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div> */}
                  <div className="cards-container-header-text">TOTAL DEDUCTION</div>
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
                  {/* <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div> */}
                  <div className="cards-container-header-text">N657,804.00</div>
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
            </div>
            <div className="dashboard-section">
              <div className="dashboard-section-one" style={{width:"100%"}}>
                <div className="card-header">
                  <div className="card-header-text">COMMISION PAYABLE</div>
                  <div className="filter-button-container">
              <div className="filter-button">
                <div className="filter-button-text">2023</div>
                <IoFilter />
              </div>
            </div>
                </div>
                <CommissionPayableChart/>
              </div>
              <div className="dashboard-section-two" style={{width:"100%"}}>
                <div className="card-header">
                  <div className="card-header-text">SALES AMOUNT</div>
                  <div className="filter-button-container">
              <div className="filter-button">
                <div className="filter-button-text">2023</div>
                <IoFilter />
              </div>
            </div>
                </div>
                <SalesAmountChart/>
              </div>
            </div>
           
            <div className="dashboard-section">

            <div className="dashboard-section-one" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">TOP SUBSCRIPTIONS</div>
                </div>
                  <TopSubscriptionChart/>
            </div>
            <div className="dashboard-section-two" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">COMMISSION PAY PER PARTNER</div>
                </div>
                  <CommissionPartnerChart/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionPerformance;
