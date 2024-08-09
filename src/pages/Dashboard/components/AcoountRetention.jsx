import React from 'react'
import { MdOutlineBarChart } from "react-icons/md";

function AccountRetention() {
  return (
<div className="dashboard-section-one" style={{width:"100%"}}>
            <div className="card-header">
                  <div className="card-header-text">ACCOUNT RETENTION</div>
                </div>
                <div className="account-retention-container">
                <div className="account-retention-card" style={{background:"#0B6ED0"}}>
                <MdOutlineBarChart style={{color:"#0B6ED0"}}/>
                </div>
                <div className="flex flex-col items-start gap-3 w-72">
                <div className="account-retention-container-header">4,316</div>
                <div className="account-retention-container-subheader">Expansion</div>
                <div className="account-retention-container-text">Customers who have upgraded the level of your products or service.</div>
                </div>
                </div>
                <div className="account-retention-container">
                <div className="account-retention-card" style={{background:"#EE5E52"}}>
                <MdOutlineBarChart style={{color:"#EE5E52"}}/>
                </div>
                <div className="flex flex-col items-start gap-3 w-72">
                <div className="account-retention-container-header">1,423</div>
                <div className="account-retention-container-subheader">Cancellations</div>
                <div className="account-retention-container-text">Customers who have ended their subscription.</div>
                </div>
                </div>
            </div>
  )
}

export default AccountRetention