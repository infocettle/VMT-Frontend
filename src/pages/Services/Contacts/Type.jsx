import Tables from "@/pages/Services/Tables/Tables";
import React, {Component} from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { IoFilter } from "react-icons/io5";

const tableHeader = [
    "CODE",
    "NAME",
    "DESCRIPTION",
    "DATE CREATED",
]
const tableRows = [
    {
        code:"123",
        name:"AGENT",
        description:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
        datecreated:"15-JUN-2023",
    },
    {
        code: "132",
        name: "AGENT",
        description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
        datecreated: "15-JUN-2023",
    }
]
const ContactType = () => {

    return(
        <div className="w-full">
            <ServicesDiv module={"Contact"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="uppercase performance_header">Type</h2>
                            </div>
                            <div className="flex gap-1">
                                <button className="services-bg-blue services-btn services-btn-sm services-no-radius">Create New</button>
                                <div className="services-btn-border">
                                    <div className="filter-button-text-service flex justify-between">Filter &nbsp;<IoFilter /></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card ">
                                <Tables headerArr={tableHeader} rowArr={tableRows}/>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactType;