import React, { useEffect, useState } from "react";
import { Table, Divider, Space } from "antd";
import Tables from "@/pages/Services/Tables/Tables";
import ServicesDiv from "../ServicesDiv";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import {
  BsEnvelopeFill,
  BsGeoAltFill,
  BsTelephoneFill,
  BsPencil,
  BsTrash,
} from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "../services.css";

export default function ViewContactPayment() {
    

  const tableHeader = ["PLAN", "GROUP", "AMOUNT"];
  const tableRows = [
    {
      plan: "Standard",
      group: "Base",
      amount: "65,000",
    },
    {
      plan: "Self service user",
      group: "User",
      amount: "120,000",
    },
    
  ];
  return (
    <div className="w-full">
      <ServicesDiv module={"Contacts"} />
      <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">
        <div className="flex justify-between w-full items-center">
          <div className="main-container">
            <div class="flex justify-between">
              <div>
                <h2
                  className="performance_header flex"
                  style={{ color: "#0B6ED0", fontSize: "12px" }}
                >
                  <Link
                    style={{ color: "#000", fontSize: "14px" }}
                    to={"/services/contacts/payments"}
                  >
                    <BiLeftArrowAlt size={20} />
                  </Link>{" "}
                  James N.
                </h2>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="bg-blue-200 rounded py-1 px-2 text-blue-800 font-bold border-2 border-blue-900"
                    style={{ fontSize: "12px" }}
                  >
                    Make Payment
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="flex flex-col items-start">
                    <Link to={""}>
                      <DropdownMenuItem className="capitalize text-xs text-black font-light">
                        First Subscription
                      </DropdownMenuItem>
                    </Link>
                    <Link to={"/services/contacts/renewsubscription"}>
                      <DropdownMenuItem className="capitalize text-xs text-black font-light">
                        Renew Subscription
                      </DropdownMenuItem>
                    </Link>
                    <Link to={"/services/contacts/updatesubscription"}>
                      <DropdownMenuItem className="capitalize text-xs text-black font-light">
                        Upgarde
                      </DropdownMenuItem>
                    </Link>
                    <Link to={""}>
                      <DropdownMenuItem className="capitalize text-xs text-black font-light">
                        Wallet Top-up
                      </DropdownMenuItem>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="services-card grid sm:grid-cols-1 md:grid-cols-2 justify-between mt-5">
              <div className="flex gap-5">
                <div
                  style={{
                    height: "140px",
                    width: "140px",
                    backgroundColor: "#666687",
                  }}
                  className="rounded grid place-content-center"
                >
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="inline-flex flex-col justify-around">
                  <p className="font-bold" style={{ fontSize: "18px" }}>
                    James Nwachukwu
                  </p>
                  <div className="flex gap-3">
                    <BsEnvelopeFill className="mt-1" />
                    <p style={{ color: "#8E8EA9", fontSize: "14px" }}>
                      {" "}
                      adaxyz@gmail.com
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <BsTelephoneFill className="mt-1" />
                    <p style={{ color: "#8E8EA9", fontSize: "14px" }}>
                      {" "}
                      +234 810 472 9030
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <BsGeoAltFill className="mt-1" />
                    <p style={{ color: "#8E8EA9", fontSize: "14px" }}>
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <div className="flex items-center space-x-2">
                  <p style={{ marginTop: "4px" }} className="mr-5">
                    Payment status:
                  </p>
                  <p className="status-badge no-border status-badge--ofsted--outstanding text-center py-1">
                    Successful
                  </p>
                </div>
                <p
                  className="text-right"
                  style={{ color: "#8E8EA9", fontSize: "14px" }}
                >
                  #646-566-4546-657
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
              <div className="services-card col-span-4 px-5">
                <div className="flex justify-between">
                  <p className="font-bold" style={{ fontSize: "15px" }}>
                    Current Subscription Information
                  </p>
                </div>
                <div className="py-2" style={{ fontSize: "12px" }}>
                  <p className="py-2">
                    Payment Cycle: <b>Yearly</b>
                  </p>
                  <p className="py-2">
                    Charges: <b>Yes</b>
                  </p>
                  <p className="py-2">
                    Discount: <b>Yes</b>
                  </p>
                  <p className="py-2">
                    Start Date: <b>1-SEP-2016</b>
                  </p>
                  <p className="py-2">
                    End Date: <b>14-FEB-2023</b>
                  </p>
                  <p className="py-2">
                    Total Amount: <b>N 165,000,000</b>
                  </p>
                </div>
                <div className="mt-3">
                  <Tables
                    headerArr={tableHeader}
                    rowArr={tableRows}
                    headBg={"beige-bg"}
                  />
                </div>
              </div>
            </div>

            <div className="services-card grid sm:grid-cols-1 md:grid-cols-1 my-5">
              <div className="flex justify-between">
                <p className="font-bold" style={{ fontSize: "15px" }}>
                  Wallet Information
                </p>
                <button
                  className="rounded py-1 px-6 border-2 border-gray-400"
                  style={{ fontSize: "12px" }}
                >
                  <b>Wallet History</b>
                </button>
              </div>
              <div className="py-2" style={{ fontSize: "12px" }}>
                <p className="py-2">
                  Wallet ID: <b>12345678</b>
                </p>
                <p className="py-2">
                  Balance: <b>$500</b>
                </p>
                <p className="py-2">
                  Last top-up date: <b>1-SEP-2016</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b py-5 px-4 flex items-center justify-between box-container-footer large_screen">
        <button
          type="button"
          style={{ height: "100%" }}
          className="services-newtype-cancel services-btn services-no-radius"
        >
          Cancel
        </button>
        <button
          type="button"
          style={{ height: "100%" }}
          className=" services-newtype-submit services-no-radius"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
