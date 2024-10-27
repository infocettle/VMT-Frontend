import React, { useEffect, useState } from "react";
import { Table, Divider, Space } from "antd"
import Tables from "@/pages/Services/Tables/Tables";
import ServicesDiv from '../ServicesDiv';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill, BsPencil, BsTrash } from "react-icons/bs";
import "../services.css"
import SubscriberIdentity from "./SubscriberIdentity";
import SubscriberAddress from "./SubscriberAddress";
import SubscriberTIN from "./SubscriberTIN";

export default function ViewContactKYC() {
    const [showSubscriberIdentity, setShowSubscriberIdentity] = useState(false);
    const [showSubscriberAddress, setShowSubscriberAddress] = useState(false);
    const [showSubscriberTIN, setShowSubscriberTIN] = useState(false);

    const openSubscriberTIN = () => {
        setShowSubscriberTIN(true);
    };

    const closeSubscriberTIN = () => {
        setShowSubscriberTIN(false);
    };

     const openSubscriberIdentity = () => {
        setShowSubscriberIdentity(true);
    };

    const closeSubscriberIdentity = () => {
        setShowSubscriberIdentity(false);
    };

     const openSubscriberAddress = () => {
        setShowSubscriberAddress(true);
    };

    const closeSubscriberAddress = () => {
        setShowSubscriberAddress(false);
    };

    const tableHeader = [
        "KYC ITEM",
        "OBTAINED",
        "RESULTS",
        "REMARKS",
        "ACTION",
    ]
    const tableRows = [
        {
            kycitem: "Subscriber Identity",
            obtained: "Yes",
            results: "Pass",
            remarks: "-",
            action: <>
                <a className="cursor-pointer" onClick={openSubscriberIdentity}>view</a>
            </>
        },
        {
            kycitem: "Subscriber Address",
            obtained: "No",
            results: "Fail",
            remarks: "Could not be located physically and on google",
            action: <>
                <a className="cursor-pointer" onClick={openSubscriberAddress}>view</a>
            </>
        },
        {
            kycitem: "Subscriber TIN",
            obtained: "Waived",
            results: "N/A",
            remarks: "Not provided by subscriber",
            action: <>
                <a className="cursor-pointer" onClick={openSubscriberTIN}>view</a>
            </>
        },
        {
            kycitem: "Representative Identity",
            obtained: "Yes",
            results: "Pass",
            remarks: "-",
            action: <>
                <a className="cursor-pointer">view</a>
            </>
        },
        {
            kycitem: "Representative Address",
            obtained: "No",
            results: "Pass",
            remarks: "-",
            action: <>
                <a className="cursor-pointer">view</a>
            </>
        },
        {
            kycitem: "Verification Status",
            // obtained: "Yes",
            results: "Pending",
            remarks: "Subscriber address verification still outstanding",
            // action: <>
            //     <a href='#'>view</a>
            // </>
        },


    ]
    return (
      

        <div className="w-full">
            <ServicesDiv module={"Contacts"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="performance_header flex" style={{ color: "#0B6ED0", fontSize: "12px" }}><Link style={{ color: "#000", fontSize: "14px" }} to={"/services/contacts/kycverification"}><BiLeftArrowAlt size={20} /></Link> 123-343-232</h2>
                            </div>
                            <button className="bg-green-700 rounded p-2 text-white font-bold" style={{fontSize: "12px"}}>Process Verification</button>
                        </div>

                        <div className="services-card grid sm:grid-cols-1 md:grid-cols-2 justify-between mt-5">
                            <div className="flex gap-5">
                                <div style={{ height: "140px", width: "140px", backgroundColor:"#666687", }} className="rounded grid place-content-center">
                                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                </div>
                                <div className="inline-flex flex-col justify-around" >
                                    <p className="font-bold" style={{fontSize: "18px"}}>James Nwachukwu</p>
                                    <div className="flex gap-3" >
                                        <BsEnvelopeFill className="mt-1"/>
                                        <p style={{color: "#8E8EA9",fontSize: "14px"}}> adaxyz@gmail.com</p>
                                    </div>
                                    <div className="flex gap-3" >
                                        <BsTelephoneFill className="mt-1"/>
                                        <p style={{color: "#8E8EA9", fontSize: "14px"}}> +234 810 472 9030</p>
                                    </div>
                                    <div className="flex gap-3" >
                                        <BsGeoAltFill className="mt-1"/>
                                        <p style={{color: "#8E8EA9", fontSize: "14px"}}>Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="flex items-center space-x-2">
                                <p style={{ marginTop: "4px" }} className="mr-5">Verification Status:</p>
                                <span className="status-badge no-border status-badge--brand--quaternary">Inactive</span>
                                </div>
                                <p className="text-right" style={{ color: "#8E8EA9", fontSize: "14px" }}>#646-566-4546-657</p>
                            </div>
                        </div>


                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card col-span-4 px-5">
                                <h3 style={{ color: "#000", fontWeight: "500", fontSize: "15px" }} className="mb-1">Verification</h3>
                                <Divider style={{ margin: 1 }} />
                                <div className="mt-3">
                                    <Tables headerArr={tableHeader} rowArr={tableRows} headBg={"beige-bg"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-b py-5 px-4 flex items-center justify-between box-container-footer large_screen">
                <button type="button" style={{ height: "100%" }} className="services-newtype-cancel services-btn services-no-radius">
                    Cancel
                </button>
                <button type="button" style={{ height: "100%" }} className=" services-newtype-submit services-no-radius">
                    Submit
                </button>
            </div>
            {showSubscriberIdentity && <SubscriberIdentity closeSubscriberIdentity={closeSubscriberIdentity} />}
            {showSubscriberAddress && <SubscriberAddress closeSubscriberAddress={closeSubscriberAddress} />}
            {showSubscriberTIN && <SubscriberTIN closeSubscriberTIN={closeSubscriberTIN} />}
        </div>
    )
}
