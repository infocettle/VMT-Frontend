import Tables from "@/pages/Services/Tables/Tables";
import React, { Component, useState } from "react";
import ServicesDiv from "../../ServicesDiv";
import "../../services.css";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  BsEnvelopeFill,
  BsGeoAltFill,
  BsTelephoneFill,
  BsTrash,
  BsPencil,
} from "react-icons/bs";
import { Space } from "antd";

const tableHeader = [
  "CONTACT ID",
  "NAME",
  "CONTACT TYPE",
  "ENTITY TYPE",
  "DATE JOINED",
  "STATUS",
  
];
const tableRows = [
  {
    contactid: "123-543-777",
    name: <Link style={{ color: "#0B6ED0" }} to={"/services/contacts/updatedetails"}>JAMES N.</Link>,
    contacttype: "SUBSCRIBER",
    entitytype: "INDIVIDUAL",
    status: (
      <>
        <p className="status-badge no-border status-badge--ofsted--outstanding text-center py-1" style={{ width: "91px" }}>
          Active
        </p>
      </>
    ),
    datejoined: "15-JUN-2024",
  },
  {
    contactid: "123-543-777",
    name: <Link style={{ color: "#0B6ED0" }} to={"/services/contacts/updatedetails"}>LORETTA O.</Link>,
    contacttype: "CONSULTANT",
    entitytype: "INDIVIDUAL",
    status: (
      <>
        <p className="status-badge no-border status-badge--ofsted--outstanding text-center py-1" style={{ width: "91px" }}>
          Active
        </p>
      </>
    ),
    datejoined: "15-JUN-2024",
  },
  {
    contactid: "123-543-777",
    name: <Link style={{ color: "#0B6ED0" }} to={"/services/contacts/updatedetails"}>HO SERVICES</Link>,
    contacttype: "SUBSCRIBER",
    entitytype: "COMPANY",
    status: (
      <>
        <p className="status-badge no-border status-badge--ofsted--outstanding text-center" style={{width:"91px"}}>
          Active
        </p>
      </>
    ),
    datejoined: "15-JUN-2024",
  },
];

const tableHeaderVerification = [
  "CONTACT ID",
  "NAME",
  "CONTACT TYPE",
  "ENTITY TYPE",
  "DATE JOINED",
  "status",
];
const tableRowsVerification = [
  {
    contactid: "123-456-789",
    name: (
      <Link
        style={{ color: "#0B6ED0" }}
        to={"/services/contacts/viewcontactpayments"}
      >
        JAMES N.
      </Link>
    ),
    contacttype: "SUBSCRIBER",
    entitytype: "INDIVIDUAL",
    datejoined: "15-JUN-2024",
    status: (
      <span className="status-badge no-border status-badge--brand--quaternary">
        Inactive
      </span>
    ),
  },
  {
    contactid: "123-456-789",
    name: (
      <Link
        style={{ color: "#0B6ED0" }}
        to={"/services/contacts/viewcontactpayments"}
      >
        LORETTA O.
      </Link>
    ),
    contacttype: "CONSULTANT",
    entitytype: "INDIVIDUAL",
    datejoined: "15-JUN-2024",
    status: (
      <span className="status-badge no-border status-badge--ofsted--outstanding">
        Active
      </span>
    ),
  },
  {
    contactid: "123-456-789",
    name: (
      <Link
        style={{ color: "#0B6ED0" }}
        to={"/services/contacts/viewcontactpayments"}
      >
        XYZ & CO INITIATIVE
      </Link>
    ),
    contacttype: "SUBSCRIBER",
    entitytype: "COMPANY",
    datejoined: "15-JUN-2024",
    status: (
      <span className="status-badge no-border status-badge--ofsted--outstanding">
        Active
      </span>
    ),
  },
];
const ServicesDashboard = () => {
  const [displayType, setdisplayType] = useState("documents");

  const constToggleDisplayType = (x) => {
    setdisplayType(x);
  };

  return (
    <div className="w-full">
      <ServicesDiv module={"Contacts"} />
      <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">
        <div className="flex justify-between w-full items-center">
          <div className="main-container">
            <div class="flex justify-between">
              <div className="flex gap-3">
                <h2 className="uppercase performance_header my-auto">
                  Dashboard
                </h2>
                <div className="negative-positive-btn bg-white">
                  <div className="filter-button-text-service flex justify-between">
                    A -
                  </div>
                </div>
                <div className="negative-positive-btn bg-white">
                  <div className="filter-button-text-service flex justify-between">
                    A +
                  </div>
                </div>
              </div>
              <div>
                <div className="services-btn-border">
                  <div className="filter-button-text-service flex justify-between">
                    Filter &nbsp;
                    <IoFilter className="mt-0.5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
              <div className="services-card ">
                {/* <Space className="mb-5">
                  <button
                    onClick={() => constToggleDisplayType("documents")}
                    style={{ backgroundColor: "green", color: "#fff" }}
                    className="status-badge no-border status-badge--ofsted--outstanding"
                  >
                    Documents
                  </button>
                  <button
                    onClick={() => constToggleDisplayType("verification")}
                    className="status-badge no-border status-badge--ofsted--outstanding"
                  >
                    Verification
                  </button>
                </Space> */}
                {displayType == "documents" && (
                  <Tables headerArr={tableHeader} rowArr={tableRows} />
                )}
                {/* {displayType == "verification" && (
                  <Tables
                    headerArr={tableHeaderVerification}
                    rowArr={tableRowsVerification}
                  />
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDashboard;
