import React from 'react';
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsEnvelopeFill,BsGeoAltFill, BsTelephoneFill  } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Select, Space, Input, Divider } from 'antd';

export default function Referees() {
  return (
    <div className="services-card col-span-4 px-5">
    <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="mb-1">Referee</h3>
    <Divider style={{margin: 1}}/>
    <div className="mt-4">
    <div className="flex space-x-4">
  <div className="grid grid-cols-4 gap-x-4 space-y-2">
    <div className="col-span-3 space-y-2">
      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Title</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">Mr.</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Surname</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">Nwachukwu</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>First name</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">James</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Middle/other name</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Maiden/former name</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Gender</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Date of Birth</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Marital status</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>NIN</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">563467543789</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Country</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>State</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Local government area</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Ward</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>
    </div>
    <div className="flex justify-end items-start">
      <div style={{ height: "140px", width: "140px", backgroundColor: "#666687" }} className="rounded grid place-content-center">
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
      </div>
    </div>
  </div>
  <div className="border-l border-gray-300 mx-4"></div>
  <div className="grid grid-cols-4 gap-x-4 space-y-2">
    <div className="col-span-3 space-y-2">
      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Title</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">Mr.</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Surname</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">Nwachukwu</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>First name</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">James</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Middle/other name</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Maiden/former name</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Gender</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Date of Birth</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Marital status</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>NIN</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">563467543789</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Country</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>State</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Local government area</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>

      <div className="flex">
        <div className="flex-1 font-bold leading-relaxed" style={{ fontSize: "14px" }}>Ward</div>
        <div className="flex-none px-2 leading-relaxed">:</div>
        <div className="flex-1 leading-relaxed">-</div>
      </div>
    </div>
    <div className="flex justify-end items-start">
      <div style={{ height: "140px", width: "140px", backgroundColor: "#666687" }} className="rounded grid place-content-center">
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
      </div>
    </div>
  </div>
</div>

    </div>

    </div>
  )
}
