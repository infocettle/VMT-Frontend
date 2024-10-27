import React from 'react'
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsEnvelopeFill,BsGeoAltFill, BsTelephoneFill  } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Select, Space, Input, Divider } from 'antd';

export default function Address() {
  return (
    <div className="services-card col-span-4 px-5">
    <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="mb-1">Address</h3>
    <Divider style={{margin: 1}}/>
    <div className="mt-4">
    <div className="space-y-2">
        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Email address</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Phone number</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Alternative phone no.</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Website</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Street number</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Street name</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Nearest Landmark</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Geo tag</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>City</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Country</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>State</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Local government area</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Ward</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>
        </div>
    </div>

    </div>
  )
}
