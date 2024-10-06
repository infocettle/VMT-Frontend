import Tables from "@/pages/Services/Tables/Tables";
import React, { Component } from "react";
import ServicesDiv from "../ServicesDiv";
// import "../services.css"
import { IoFilter, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const tableHeader = [
    "PROSPECT ID",
    "NAME",
    "ENTITY TYPE",
    "AGENT NAME",
    "DATE JOINED",
    "Action",
]
const tableRows = [
    {
        prospectid: "123-456-789",
        name: <Link 
        // style={{ color: "#0B6ED0" }} 
        >JAMES N.</Link>,
        agentname: "LORETTA",
        entitytype: "INDIVIDUAL",
        datejoined: "15-JUN-2024",
        action: <span><IoChatbubbleEllipsesOutline size={23} color="#0B6ED0" /></span>

    },
    {
        prospectid: "123-456-789",
        name: <Link  >LORETTA O.</Link>,
        agentname: "LORETTA",
        entitytype: "INDIVIDUAL",
        datejoined: "15-JUN-2024",
        action: <span><IoChatbubbleEllipsesOutline size={23} color="#0B6ED0"/></span>
    },
    {
        prospectid: "123-456-789",
        name: <Link >XYZ & CO INITIATIVE</Link>,
        agentname: "LORETTA",
        entitytype: "COMPANY",
        datejoined: "15-JUN-2024",
        action: <span><IoChatbubbleEllipsesOutline size={23} color="#0B6ED0" /></span>

    }

]
const Prospect = () => {

    return (
        <div className="w-full">
            <ServicesDiv module={"Prospect"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                {/* <h2 className="uppercase performance_header">Prospect</h2> */}
                            </div>
                            <div className="flex gap-1">
                                <Link to={"/services/newprospect"}>
                                    <button type="button" style={{ height: "100%" }} className="services-bg-blue services-btn services-btn-sm services-no-radius">Create New</button>
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

export default Prospect;