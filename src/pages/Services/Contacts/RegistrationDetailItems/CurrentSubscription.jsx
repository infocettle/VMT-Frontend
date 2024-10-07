import React from 'react'
import {Table, Divider} from "antd"


export default function () {
  return (
    <div className="services-card col-span-4 px-5">
       <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="mb-1">Subscription History</h3>
         <Divider style={{margin: 1}}/>
        <div className="grid grid-cols-5 gap-4 mt-2" style={{fontSize: "14px"}}>
            <div className="col-span-1">
                <p>Subscriber</p>
            </div>
            <div className="col-span-1">
                <p>234567899</p>
            </div>
            <div className="col-span-1">
                <p>DesignXcel</p>
            </div>
            <div className="col-span-1">
                <p>info@designcel.com</p>
            </div>
            <div className="col-span-1">
                <p>+2344567876567</p>
            </div>

            <div className="col-span-1">
                <p>Subscriber</p>
            </div>
            <div className="col-span-1">
                <p>234567899</p>
            </div>
            <div className="col-span-1">
                <p>DesignXcel</p>
            </div>
            <div className="col-span-1">
                <p>info@designcel.com</p>
            </div>
            <div className="col-span-1">
                <p>+2344567876567</p>
            </div>

            <div className="col-span-1">
                <p>Subscriber</p>
            </div>
            <div className="col-span-1">
                <p>234567899</p>
            </div>
            <div className="col-span-1">
                <p>DesignXcel</p>
            </div>
            <div className="col-span-1">
                <p>info@designcel.com</p>
            </div>
            <div className="col-span-1">
                <p>+2344567876567</p>
            </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-4" style={{fontSize: "14px"}}>
            <div className="col-span-1">
                <p>Payment Cycle</p>
            </div>
            <div className="col-span-4">
                <p>1 year</p>
            </div>

            <div className="col-span-1">
                <p>Payment Cycle</p>
            </div>
            <div className="col-span-4">
                <p>1 year</p>
            </div>

            <div className="col-span-1">
                <p>Payment Cycle</p>
            </div>
            <div className="col-span-4">
                <p>1 year</p>
            </div>
        </div>
        <div className='mt-3'>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: "14px" }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Item Description</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Qty</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Price</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Period</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ textAlign: 'left', padding: '8px' }}>Standard Plan</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>1</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>10,000.00</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>12</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>120,000.00</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                        <input type="checkbox" checked readOnly /> Standard Modules
                    </td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>All</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                        <input type="checkbox" checked readOnly /> Admin User
                    </td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>2</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                        <input type="checkbox" checked readOnly /> Storage (15gb)
                    </td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>1</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    <td style={{ textAlign: 'left', padding: '8px' }}></td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
  )
}
