import React from 'react'
import {Table, Divider} from "antd"

export default function Ewallet() {
    const columns = [
        {
          title: "TRANSACTION ID",
          dataIndex: "transactionId",
          key: "transactionId",
        },
        {
          title: "TRANSACTION TYPE",
          dataIndex: "transactionType",
          key: "transactionType",
        },
        {
          title: "AMOUNT",
          dataIndex: "amount",
          key: "amount",
        },
        {
            title: "STATUS",
            key: "status",
            dataIndex: "status",
           
          },
        {
            title: "TRANSACTION DATE",
            key: "transactionDate",
            dataIndex: "transactionDate",
           
          },
          
      ];
    
      const data = [
        {
          key: "1",
          transactionId: "Means of ID",
          transactionType: "3456789096",
          amount: "15-jun-2023",
          status: (
            <>
                <button className='btn  status-badge no-border status-badge--brand--quaternary' style={{backgroundColor: "#E1EFFE", fontWeight: "500", fontSize: "12px"}}>Unverified</button>
            </>
          ),
          transactionDate: "15-jun-2023",
        },
       
      ];
  return (
    <div className="services-card col-span-4 px-5">
        <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="mb-1">E-Wallet History</h3>
         <Divider style={{margin: 1}}/>
        <div className="mt-3">
            <Table columns={columns} dataSource={data} />;
        </div>
    </div>
  )
}
