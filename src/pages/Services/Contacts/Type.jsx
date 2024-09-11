import Tables from "@/pages/Services/Tables/Tables";
import React, {Component, useState} from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import OverlayLoader from "@/components/OverlayLoader";


const tableHeader = [
    "CODE",
    "NAME",
    "DESCRIPTION",
    "DATE CREATED",
]

const ContactType = () => {
    const titleUrl = `${baseUrl}services/contacts/type`;
    const { data, isPending } = useFetchData(titleUrl, "type");

    const mappedArr = data?.map((x, i) => {
        return{
            code: x?.code,
            name: x?.name?.toUpperCase(),
            description: x?.description,
            datecreated: x?.dateCreated?.substring(0,10),
        }
    })
   



    if (isPending) {
        return <OverlayLoader/>;
    }
    return(
        <div className="w-full">
            <ServicesDiv module={"Contact"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="uppercase performance_header ml-4">Type</h2>
                            </div>
                            <div className="flex gap-1">
                                <Link to={"/services/contacts/newtype"}>
                                    <button type="button" style={{height:"100%"}} className="services-bg-blue services-btn services-btn-sm services-no-radius">Create New</button>
                                </Link>
                               
                                <div className="services-btn-border">
                                    <div className="filter-button-text-service flex justify-between">Filter &nbsp;<IoFilter /></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card ">
                                <Tables headerArr={tableHeader} rowArr={mappedArr}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactType;