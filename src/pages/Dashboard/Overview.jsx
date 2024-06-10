import SecondHeader from "@/components/SecondHeader";
import React, { useState } from "react";
import DashboardDiv from "./DashboardDiv";
import { IoFilter } from "react-icons/io5";
import { MdPointOfSale } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import "./dashboard.css";
import { SalesLineChart } from "./charts/SalesLineChart";
import { PaymentPieChart } from "./charts/PaymentsPieChart";
import { Calendar } from "@/components/ui/calendar"
import { FaRegBell } from "react-icons/fa";
import Tables from "./Tables";

const Overview = () => {
  const [open, setIsOpen] = useState(false);
  const [date, setDate] = React.useState(new Date())
  return (
    <div className="w-full">
      <DashboardDiv module={"Overview"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <div className="main-container">
            <div className="filter-button-container">
              <div className="filter-button">
                <IoFilter />
                <div className="filter-button-text">Filter</div>
              </div>
            </div>
            <div className="dashboard-cards-container">
              <div className="cards-container">
                <div className="cards-container-header">
                  <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div>
                  <div className="cards-container-header-text">SALES</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">
                    ₦12,234,657,804.00
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
                  <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div>
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
                  <div className="cards-container-header-box">
                    <MdPointOfSale />
                  </div>
                  <div className="cards-container-header-text">PROSPECTS</div>
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
                  <div className="cards-container-header-text">PARTNERS</div>
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
              <div className="dashboard-section-one">
                <div className="card-header">
                  <div className="card-header-text">SALES</div>
                </div>
                <SalesLineChart/>
              </div>
              <div className="dashboard-section-two">
                <div className="card-header">
                  <div className="card-header-text">PAYMENTS</div>
                </div>
                <PaymentPieChart/>
              </div>
            </div>
            <div className="dashboard-section">
              <div className="dashboard-section-one notification-section">
                <div className="card-header">
                  <div className="card-header-text">NOTIFICATIONS</div>
                </div>
                <div className="notification-container">
                <div className="notification-text-container">
                <div className="notification-text-header">New Contact Registered </div>
                <div className="notification-text-subheader">
                # <span>1626249741</span> created a subscriber account
                </div>
                </div>
                <div className="notification-icon-box">
                <FaRegBell />
                </div>
                </div>
                <div className="notification-container">
                <div className="notification-text-container">
                <div className="notification-text-header">New Contact Registered </div>
                <div className="notification-text-subheader">
                # <span>1626249741</span> created a subscriber account
                </div>
                </div>
                <div className="notification-icon-box">
                <FaRegBell />
                </div>
                </div>
                <div className="notification-container">
                <div className="notification-text-container">
                <div className="notification-text-header">New Contact Registered </div>
                <div className="notification-text-subheader">
                # <span>1626249741</span> created a subscriber account
                </div>
                </div>
                <div className="notification-icon-box">
                <FaRegBell />
                </div>
                </div>
                <div className="notification-container">
                <div className="notification-text-container">
                <div className="notification-text-header">New Contact Registered </div>
                <div className="notification-text-subheader">
                # <span>1626249741</span> created a subscriber account
                </div>
                </div>
                <div className="notification-icon-box">
                <FaRegBell />
                </div>
                </div>
                <div className="notification-container">
                <div className="notification-text-container">
                <div className="notification-text-header">New Contact Registered </div>
                <div className="notification-text-subheader">
                # <span>1626249741</span> created a subscriber account
                </div>
                </div>
                <div className="notification-icon-box">
                <FaRegBell />
                </div>
                </div>
                <div className="notification-container">
                <div className="notification-text-container">
                <div className="notification-text-header">New Contact Registered </div>
                <div className="notification-text-subheader">
                # <span>1626249741</span> created a subscriber account
                </div>
                </div>
                <div className="notification-icon-box">
                <FaRegBell />
                </div>
                </div>
                <div className="notification-container">
                <div className="notification-text-container">
                <div className="notification-text-header">New Contact Registered </div>
                <div className="notification-text-subheader">
                # <span>1626249741</span> created a subscriber account
                </div>
                </div>
                <div className="notification-icon-box">
                <FaRegBell />
                </div>
                </div>
              </div>
              <div className="dashboard-section-two">
                <div className="card-header">
                  <div className="card-header-text">CALENDER</div>
                </div>
                <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md  w-full"

  />
              </div>
            </div>
            <div className="dashboard-section">

            <div className="dashboard-section-one" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">ACTIVE SUBSCRIPTIONS</div>
                </div>
                <Tables/>
            </div>
            <div className="dashboard-section-two" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">INACTIVE SUBSCRIPTIONS</div>
                </div>
                <Tables/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
