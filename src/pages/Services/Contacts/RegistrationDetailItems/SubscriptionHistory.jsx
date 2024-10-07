import React from 'react'
import {Table, Divider} from "antd"

export default function SubscriptionHistory() {
    const columns = [
        {
          title: "DOCUMENT TYPE",
          dataIndex: "documentType",
          key: "documentType",
        },
        {
          title: "REFERENCE ID",
          dataIndex: "referenceId",
          key: "referenceId",
        },
        {
          title: "DATE UPLOADED",
          dataIndex: "dateUploaded",
          key: "dateUploaded",
        },
        {
            title: "ISSUE DATE",
            key: "issueDate",
            dataIndex: "issueDate",
           
          },
          {
            title: "EXPIRY DATE",
            key: "expiryDate",
            dataIndex: "expiryDate",
           
          },
        {
            title: "STATUS",
            key: "status",
            dataIndex: "status",
           
          },
          {
            title: "ACTION",
            key: "action",
            dataIndex: "action",
           
          },
      ];
    
    const data = [
    {
        key: "1",
        documentType: "Means of ID",
        referenceId: "3456789096",
        dateUploaded: "15-jun-2023",
        issueDate: "15-jun-2023",
        expiryDate: "15-jun-2023",
        status: (
        <>
            <button className='btn  status-badge no-border status-badge--brand--quaternary' style={{backgroundColor: "#E1EFFE", fontWeight: "500", fontSize: "12px"}}>Unverified</button>
        </>
        ),
        action: (
        <>
            <p className="text-blue-700">View</p>
        </>
        ),
    },
    
    ];
  return (
    <div className="services-card col-span-4 px-5">
        <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="mb-1">Subscription History</h3>
         <Divider style={{margin: 1}}/>
        <div className="mt-3">
            <Table columns={columns} dataSource={data} />;
        </div>
    </div>
  )
}
