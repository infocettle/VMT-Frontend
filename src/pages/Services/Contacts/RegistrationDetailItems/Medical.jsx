import React from 'react'
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsEnvelopeFill,BsGeoAltFill, BsTelephoneFill  } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Select, Space, Input, Divider } from 'antd';

export default function Medical() {
  return (
    <div className="services-card col-span-4 px-5">
    <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="mb-1">Medical</h3>
    <Divider style={{margin: 1}}/>
    <div className="mt-4">
    <div className="space-y-2">
        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Genotype</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Blood group</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed"></div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Pregnant</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Previous CS</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Known allergies</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Other relevant medical details</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        <div className="flex">
            <div className="flex-1 font-bold leading-relaxed" style={{fontSize: "14px"}}>Known ailments</div>
            <div className="flex-none px-2 leading-relaxed">:</div>
            <div className="flex-1 leading-relaxed">-</div>
        </div>

        

        

        
        </div>
    </div>

    </div>
  )
}
