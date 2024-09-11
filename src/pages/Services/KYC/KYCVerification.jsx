import Tables from "@/pages/Services/Tables/Tables";
import React, { Component, useState } from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill, BsTrash, BsPencil } from "react-icons/bs";
import { Space } from "antd";


const tableHeader = [
    "DOCUMENT CODE",
    "NAME",
    "FUNCTIONAL DESCRIPTION",
    "DATE CREATED",
    "ACTION",
]
const tableRows = [
    {
        documentcode: "1",
        name: <Link style={{ color: "#000" }} to={""}>TRADING</Link>,
        functionaldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        datecreated: "15-JUN-2024",
        action:<>
           <Space>
                <Link to={"/services/contacts/documentinformation"}><BsPencil size={17} color="" className="mr-2" /> </Link>
                <BsTrash size={17} color="#D02B20" />
           </Space>
        </>
    },
    {
        documentcode: "2",
        name: <Link style={{ color: "#000" }} to={""}>EDUCATION</Link>,
        functionaldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        datecreated: "15-JUN-2024",
        action: <>
            <Space>
                <Link to={"/services/contacts/documentinformation"}><BsPencil size={17} color="" className="mr-2" /> </Link>
                <BsTrash size={17} color="#D02B20" />
            </Space>
        </>
    },
    {
        documentcode: "3",
        name: <Link style={{ color: "#000" }} to={""}>SERVICES</Link>,
        functionaldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        datecreated: "15-JUN-2024",
        action: <>
            <Space>
                <Link to={"/services/contacts/documentinformation"}><BsPencil size={17} color="" className="mr-2" /> </Link>
                <BsTrash size={17} color="#D02B20" />
            </Space>
        </>
    },
    

]


const tableHeaderVerification = [
    "CONTACT ID",
    "NAME",
    "CONTACT TYPE",
    "ENTITY TYPE",
    "DATE JOINED",
    "status",
]
const tableRowsVerification = [
    {
        contactid: "123-456-789",
        name: <Link style={{ color: "#0B6ED0" }} to={"/services/contacts/viewcontactkyc"}>JAMES N.</Link>,
        contacttype: "SUBSCRIBER",
        entitytype: "INDIVIDUAL",
        datejoined: "15-JUN-2024",
        status: <span className="status-badge no-border status-badge--brand--quaternary">Inactive</span>
    },
    {
        contactid: "123-456-789",
        name: <Link style={{ color: "#0B6ED0" }} to={"/services/contacts/viewcontactkyc"}>LORETTA O.</Link>,
        contacttype: "CONSULTANT",
        entitytype: "INDIVIDUAL",
        datejoined: "15-JUN-2024",
        status: <span className="status-badge no-border status-badge--ofsted--outstanding">Active</span>
    },
    {
        contactid: "123-456-789",
        name: <Link style={{ color: "#0B6ED0" }} to={"/services/contacts/viewcontactkyc"}>XYZ & CO INITIATIVE</Link>,
        contacttype: "SUBSCRIBER",
        entitytype: "COMPANY",
        datejoined: "15-JUN-2024",
        status: <span className="status-badge no-border status-badge--ofsted--outstanding">Active</span>
        ,
    }

]
const KYCVerification = () => {
    const [displayType, setdisplayType] = useState("documents")
    const [activeButton, setActiveButton] = useState("documents");

    const handleClick = (button) => {
        setActiveButton(button);
        setdisplayType(button)
    };

    // const constToggleDisplayType = (x) => {
    //     setdisplayType(x)
    // }   

    return (
        <div className="w-full">
            <ServicesDiv module={"Contact"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="uppercase performance_header">KYC Verification</h2>
                            </div>
                            <div className="flex gap-1">
                                <Link state={{
                                    some: {
                                        routeProps: null,
                                    }
                                }} to={"/services/contacts/documentinformation"}>
                                    <button type="button" style={{ height: "100%" }} className="services-bg-blue services-btn services-btn-sm services-no-radius">Create New</button>
                                </Link>
                                <div className="services-btn-border">
                                    <div className="filter-button-text-service flex justify-between">Filter &nbsp;<IoFilter /></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card ">
                               {/* <Space className="mb-5">
                                    <button onClick={() => constToggleDisplayType("documents")} style={{ backgroundColor: "green", color: "#fff" }} className="status-badge no-border status-badge--ofsted--outstanding">Documents</button>
                                    <button onClick={() => constToggleDisplayType("verification")} className="status-badge no-border status-badge--ofsted--outstanding">Verification</button>
                               </Space> */}
                                <div className="button-container">
                                    <button
                                        className={`custom-button ${activeButton === 'documents' ? 'active' : ''}`}
                                        onClick={() => handleClick('documents')}
                                    >
                                        Documents
                                    </button>
                                    <button
                                        className={`custom-button ${activeButton === 'verification' ? 'active' : ''}`}
                                        onClick={() => handleClick('verification')}
                                    >
                                        Verification
                                    </button>
                                </div>
                                {displayType == "documents" && <Tables headerArr={tableHeader} rowArr={tableRows} />}
                                {displayType == "verification" && <Tables headerArr={tableHeaderVerification} rowArr={tableRowsVerification} />}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default KYCVerification;