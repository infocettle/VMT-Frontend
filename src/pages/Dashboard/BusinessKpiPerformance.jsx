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

import SalesOverviewChart from "./charts/SalesOverviewChart";
import ActiveUsersChart from "./charts/ActiveUsersChart";
import ReferralChart from "./charts/ReferralChart";
import PendingTable from "./PendingTable";

const BusinessKpiPerformance = () => {
  const [open, setIsOpen] = useState(false);
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="w-full">
      <DashboardDiv module={"Performance"} />
      <div className="bg-gray-100 py-3 scrolled-height px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <div className="main-container">
            <div className="filter-button-container justify-between">
              <h2 className="uppercase font-light text-base">Business Kpis</h2>
              {/* <div className="filter-button">
                <IoFilter />
                <div className="filter-button-text">Filter</div>
              </div> */}
            </div>
            <div className="dashboard-cards-container">
              <div className="cards-container">
                <div className="cards-container-header">
                  <div className="cards-container-header-text">
                    TOTAL TRANSACTION
                  </div>
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
                  <div className="cards-container-header-text">PARTNERS</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">50</div>
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
                  <div className="cards-container-header-text">TOTAL SALES</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">
                    N124,234,60.00
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
            </div>
            <div className="dashboard-section">
              <div className="dashboard-section-one" style={{ width: "100%" }}>
                <div className="card-header">
                  <div className="card-header-text">SALES OVERVIEW</div>
                </div>
                <SalesOverviewChart />
              </div>
              <div className="dashboard-section-two" style={{ width: "100%" }}>
                <div className="card-header">
                  <div className="card-header-text">ACTIVE USERS</div>
                </div>
                <ActiveUsersChart />
              </div>
            </div>

            <div className="dashboard-section">
              <div className="dashboard-section-one" style={{ width: "100%" }}>
                <div className="card-header">
                  <div className="card-header-text">ACTIVE SUBSCRIPTIONS</div>
                </div>
                <div
                  className="dashboard-section-one"
                  style={{ width: "100%", display: "flex", gap: "20px",justifyContent:"center",padding:"18px",alignItems:"center" }}
                >
                  <div className="flex flex-col w-100">
                    <div className="referral-tracking-box">
                      <div className="referral-tracking-box-text-header">
                        Invited Prospect
                      </div>
                      <div className="referral-tracking-box-text-subheader">
                        27
                      </div>
                    </div>
                    <div className="referral-tracking-box">
                      <div className="referral-tracking-box-text-header">
                        Referall Bonus
                      </div>
                      <div className="referral-tracking-box-text-subheader">
                        ₦123,234.00
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    {" "}
                    <ReferralChart />
                  </div>
                </div>
              </div>
              <div className="dashboard-section-two" style={{ width: "100%" }}>
                <div className="card-header">
                  <div className="card-header-text">RECENT ORDERS</div>
                </div>
                <div className="sales-unit-container">
                        <PendingTable/>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessKpiPerformance;
