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

import PaymentsPieChart from "./charts/PaymentsPieChart";
import CustomerCountChart from "./charts/CustomerCountChart";
import SalesLineChart from "./charts/SalesLineChart";
import DemographicBarChart from "./DemographicBarChart";
import PendingTable from "./PendingTable";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaMoneyBills } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";

const GeneralPerfomance = () => {
  const [open, setIsOpen] = useState(false);
  const [date, setDate] = React.useState(new Date())
  return (
    <div className="w-full">
      <DashboardDiv module={"Performance"} />
      <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <div className="main-container">
            <div className="filter-button-container justify-between" >
            <h2 className="uppercase performance_header">General</h2>
              <div className="filter-button">
                <IoFilter />
                <div className="filter-button-text">Filter</div>
              </div>
            </div>
            <div className="dashboard-cards-container">
              <div className="cards-container">
                <div className="cards-container-header">
                  <div className="cards-container-header-box" >
                    <MdPointOfSale style={{color:" #0B6ED0"}}/>
                  </div>
                  <div className="cards-container-header-text">SALES</div>
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
                  <div className="cards-container-header-box" style={{backgroundColor:" #C942B726"}}>
                  <BiSolidUserRectangle  style={{color:"#C942B7"}}/>
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
                  <div className="cards-container-header-box" style={{backgroundColor:"#2F0A2826"}}>
                  <ImUsers style={{color:"#2F0A28"}} />
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
              <div className="cards-container">
                <div className="cards-container-header">
                  <div className="cards-container-header-box" style={{backgroundColor:" #12A55C26"}}>
                  <FaMoneyBills style={{color:"#12A55C"}}/>
                  </div>
                  <div className="cards-container-header-text">TRANSACTIONS</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">N12,234,657.00</div>
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
              <div className="dashboard-section-one"  style={{width:"100%"}}>
                <div className="card-header">
                  <div className="card-header-text">CUSTOMER COUNT</div>
                </div>
                <CustomerCountChart/>
              </div>
              <div className="dashboard-section-two"  style={{width:"100%"}}>
                <div className="card-header">
                  <div className="card-header-text">DEMOGRAPHIC DISTRIBUTION</div>
                </div>
           <DemographicBarChart/>
              </div>
              <div className="dashboard-section-one" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">PENDING ORDERS</div>
                </div>
                <div className="overflow-scroll " style={{height:"362px"}}>
                     <PendingTable/>
                </div>
           
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

export default GeneralPerfomance;
