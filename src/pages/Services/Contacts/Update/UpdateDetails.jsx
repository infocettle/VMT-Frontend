import React, { Component, useState } from "react";
import ServicesDiv from "../../ServicesDiv";
import "../../services.css"
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Select, Space, Input, Divider } from 'antd';
import Address from "../RegistrationDetailItems/Address";
import BasicDetails from "../RegistrationDetailItems/BasicDetails";
import CurrentSubscription from "../RegistrationDetailItems/CurrentSubscription";
import Ewallet from "../RegistrationDetailItems/Ewallet";
import Guarantors from "../RegistrationDetailItems/Guarantors";
import Medical from "../RegistrationDetailItems/Medical";
import Others from "../RegistrationDetailItems/Others";
import Referees from "../RegistrationDetailItems/Referees";
import Relative from "../RegistrationDetailItems/Relative";
import SubscriptionHistory from "../RegistrationDetailItems/SubscriptionHistory";
import Verification from "../RegistrationDetailItems/Verification";


const { TextArea } = Input;


const options = [
    {
        label: 'Document 1',
        value: 'document1',
        desc: 'Document 1',
    },
    {
        label: 'Document 2',
        value: 'document2',
        desc: 'Document 2',
    },
    {
        label: 'Document 3',
        value: 'document3',
        desc: 'Document 3',
    }
];
const UpdateDetails = () => {
    const [displayIndicator, setDisplayIndicator] = useState(1);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const displayMethod = (data) => {
        setDisplayIndicator(data)
    }

    return (
        <div className="w-full">
            <ServicesDiv module={"Contacts"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="performance_header flex" style={{ color: "#0B6ED0", fontSize: "12px" }}><Link style={{ color: "#000", fontSize: "14px" }} to={"/services/contacts/update"}><BiLeftArrowAlt size={20} /></Link> Go back</h2>
                            </div>
                           <div>
                                <button className="bg-blue-700 rounded p-2 text-white font-bold mr-2" style={{ fontSize: "12px" }}>Update</button>
                                <button className="bg-blue-700 rounded p-2 text-white font-bold" style={{ fontSize: "12px" }}>Blacklist</button>
                           </div>
                        </div>

                        <div className="services-card grid sm:grid-cols-1 md:grid-cols-2 justify-between mt-5">
                            <div className="flex gap-5">
                                <div style={{ height: "140px", width: "140px", backgroundColor: "#666687", }} className="rounded grid place-content-center">
                                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </div>
                                <div className="inline-flex flex-col justify-around" >
                                    <p className="font-bold" style={{ fontSize: "18px" }}>James Nwachukwu</p>
                                    <div className="flex gap-3" >
                                        <BsEnvelopeFill className="mt-1" />
                                        <p style={{ color: "#8E8EA9", fontSize: "14px" }}> adaxyz@gmail.com</p>
                                    </div>
                                    <div className="flex gap-3" >
                                        <BsTelephoneFill className="mt-1" />
                                        <p style={{ color: "#8E8EA9", fontSize: "14px" }}> +234 810 472 9030</p>
                                    </div>
                                    <div className="flex gap-3" >
                                        <BsGeoAltFill className="mt-1" />
                                        <p style={{ color: "#8E8EA9", fontSize: "14px" }}>Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="flex items-center space-x-2">
                                    <p style={{ marginTop: "4px" }} className="mr-5">Status:</p>
                                    <span className="status-badge no-border status-badge--ofsted--outstanding text-center py-1" style={{ width: "91px" }}>
                                        Active
                                    </span>
                                </div>
                                <p className="text-right" style={{ color: "#8E8EA9", fontSize: "14px" }}>#646-566-4546-657</p>
                            </div>
                        </div>


                        <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4 mt-5">
                            <div className="services-card-reg-side">
                                <div className="mt-1 reg-left-menu-first active-service-side" onClick={() => displayMethod(1)}>
                                    <p >Basic Detail</p>
                                </div>
                                <div className="reg-left-menu " onClick={() => displayMethod(2)}>
                                    <p className="">Address</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(3)}>
                                    <p className="">Others</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(4)}>
                                    <p className="">Relative</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(5)}>
                                    <p className="">Referees</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(6)}>
                                    <p className="">Guarantors</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(7)}>
                                    <p className="">Medical</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(8)}>
                                    <p className="">Verification</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(9)}>
                                    <p className="">Current Subscription</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(10)}>
                                    <p className="">Subscription History</p>
                                </div>
                                <div className="reg-left-menu" onClick={() => displayMethod(11)}>
                                    <p className="">E-Wallet</p>
                                </div>

                            </div>
                            {displayIndicator == 1 && <BasicDetails />}
                            {displayIndicator == 2 && <Address />}
                            {displayIndicator == 3 && <Others />}
                            {displayIndicator == 4 && <Relative />}
                            {displayIndicator == 5 && <Referees />}
                            {displayIndicator == 6 && <Guarantors />}
                            {displayIndicator == 7 && <Medical />}
                            {displayIndicator == 8 && <Verification />}
                            {displayIndicator == 9 && <CurrentSubscription />}
                            {displayIndicator == 10 && <SubscriptionHistory />}
                            {displayIndicator == 11 && <Ewallet />}



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
        </div>
    )
}

export default UpdateDetails;