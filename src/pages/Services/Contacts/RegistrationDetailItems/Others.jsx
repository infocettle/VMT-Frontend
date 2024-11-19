import React from 'react'
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsEnvelopeFill,BsGeoAltFill, BsTelephoneFill  } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Select, Space, Input, Divider } from 'antd';

export default function Others() {
  return (
    <div className="services-card col-span-4 px-5">
    <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="mb-1">Others</h3>
    <Divider style={{margin: 1}}/>
    <div className="mt-4">
    <div className="space-y-2">
        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Bank code</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Bank name</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Bank account name</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Bank account number</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Tax ID number</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>VAT ID number</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>penCom code</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>ITF code</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>NSITF code</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>NHF code</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Certificate of incorporation</div>
            <div className="flex-1 leading-relaxed">
                <button className='rounded bg-gray-200 px-2 border-gray-200 border-4'>View</button>
            </div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Means of identification</div>
            <div className="flex-1 leading-relaxed">
                <button className='rounded bg-gray-200 px-2 border-gray-200 border-4'>View</button>
            </div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Identity type</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>
        </div>
    </div>

    </div>
  )
}
