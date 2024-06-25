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
import TimeSpeedComponent from "./components/TimeSpeedComponent";
import ResolveComplaintChart from "./charts/ResolveComplaintChart";
import AverageSpeedChart from "./charts/AverageSpeedChart";
import TicketInflowChart from "./charts/TicketInflowChart";
import TicketTypeChart from "./charts/TicketTypeChart";

const SupportServicePerformance = () => {
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
          <h2 className="uppercase performance_header">Support Service</h2>
              {/* <div className="filter-button">
                <IoFilter />
                <div className="filter-button-text">Filter</div>
              </div> */}
            </div>
            <div className="dashboard-cards-container dashboard-cards-container-two">
           
              <div className="cards-container">
                <div className="cards-container-header">
                 
                  <div className="cards-container-header-text">SUPPORT REQUEST</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">108</div>
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
                
                  <div className="cards-container-header-text">RESOLUTIONS</div>
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
              <div className="cards-container">
                <div className="cards-container-header">
                  
                  <div className="cards-container-header-text">AVG. RESPONSE TIME</div>
                </div>
                <div className="cards-container-footer">
                  <div className="cards-container-footer-number">4m:28s</div>
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
                  <div className="card-header-text">TICKET INFLOW</div>
              
                </div>
                <TicketInflowChart/>
              </div>
              <div className="dashboard-section-two" style={{width:"100%"}}>
                <div className="card-header">
                  <div className="card-header-text">TICKET BY REQUEST TYPE</div>
               
                </div>
                <TicketTypeChart/>
              </div>
            </div>
           
            <div className="dashboard-section">

            <div className="dashboard-section-one" style={{width:"100%"}}>
         
            <div className="account-retention-container">
        <div >
            <ResolveComplaintChart/>
        </div>
        <div className="flex flex-col items-start gap-3 w-72">
        <div className="account-retention-container-header">4m:28s</div>
        <div className="account-retention-container-subheader">Time to Resolve Complaint</div>
        <div className="account-retention-container-text">The average time taken to resolve complaints.</div>
        </div>
        </div>
            </div>
            <div className="dashboard-section-two" style={{width:"100%"}}>
         
            <div className="account-retention-container">
        <div>
        <AverageSpeedChart/>
        </div>
        <div className="flex flex-col items-start gap-3 w-72">
        <div className="account-retention-container-header">0m:18s</div>
        <div className="account-retention-container-subheader">Average Speed of Answer</div>
        <div className="account-retention-container-text">The average time taken to resolve complaints.</div>
        </div>
        </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServicePerformance;
