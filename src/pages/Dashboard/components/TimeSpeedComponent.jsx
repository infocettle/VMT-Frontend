import React from 'react'
import { MdOutlineBarChart } from "react-icons/md";
import ResolveComplaintChart from '../charts/ResolveComplaintChart';
function TimeSpeedComponent() {
  return (
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
  )
}

export default TimeSpeedComponent