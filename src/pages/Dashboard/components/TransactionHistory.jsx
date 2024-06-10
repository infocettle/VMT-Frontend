import React from 'react'
import Tables from '../Tables'
import TransactionHistoryTable from '../TransactionHistoryTable'

function TransactionHistory() {
  return (
    <div className="dashboard-section-one" style={{width:"100%"}}>
    <div className="card-header">
          <div className="card-header-text">TRANSACTION HISTORY</div>
        </div>
        <TransactionHistoryTable/>
    </div>
  )
}

export default TransactionHistory