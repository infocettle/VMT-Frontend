import Tables from "@/pages/Services/Tables/Tables";
import React, { Component } from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";

const tableHeader = [
    "CONTACT ID",
    "NAME",
    "CONTACT TYPE",
    "ENTITY TYPE",
    "DATE JOINED",
    "status",
]
const tableRows = [
    {
        contactid: "123-456-789",
        name: <Link style={{ color:"#0B6ED0"}} to={"/services/contacts/registrationdetails"}>JAMES N.</Link>,
        contacttype: "SUBSCRIBER",
        entitytype: "INDIVIDUAL",
        datejoined: "15-JUN-2024",
        status: <span className="status-badge no-border status-badge--brand--quaternary">Inactive</span>
    },
    {
        contactid: "123-456-789",
        name: <Link style={{ color: "#0B6ED0" }} to={"/services/contacts/registrationdetails"}>LORETTA O.</Link>,
        contacttype: "CONSULTANT",
        entitytype: "INDIVIDUAL",
        datejoined: "15-JUN-2024",
        status: <span className="status-badge no-border status-badge--ofsted--outstanding">Active</span>
    },
    {
        contactid: "123-456-789",
        name: <Link style={{ color: "#0B6ED0" }} to={"#"}>XYZ & CO INITIATIVE</Link>,
        contacttype: "SUBSCRIBER",
        entitytype: "COMPANY",
        datejoined: "15-JUN-2024",
        status: <span className="status-badge no-border status-badge--ofsted--outstanding">Active</span>
,
    }
    
]
const ContactRegistration = () => {

    return (
        <div className="w-full">
            <ServicesDiv module={"Contact"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="uppercase performance_header">Registration</h2>
                            </div>
                            <div className="flex gap-1">
                                <Link to={""}>
                                    <button type="button" style={{ height: "100%" }} className="services-bg-blue services-btn services-btn-sm services-no-radius">New Contact</button>
                                </Link>
                                <Link to={""}>
                                    <button type="button" style={{ height: "100%" }} className="services-bg-blue services-btn services-btn-sm services-no-radius">View flow</button>
                                </Link>

                                <div className="services-btn-border">
                                    <div className="filter-button-text-service flex justify-between">Filter &nbsp;<IoFilter /></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card ">
                                <Tables headerArr={tableHeader} rowArr={tableRows} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactRegistration;