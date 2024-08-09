import React, { Component } from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { BiLeftArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom";
import { Select, Space, Input } from 'antd';
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
const RegistrationDetails = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="w-full">
            <ServicesDiv module={"Contacts"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="performance_header flex" style={{ color: "#0B6ED0", fontSize: "12px" }}><Link style={{ color: "#000", fontSize: "14px" }} to={"/services/contacts/registration"}><BiLeftArrowAlt size={20} /></Link> Go back</h2>
                            </div>
                        </div>

                        <div className="services-card grid sm:grid-cols-1 md:grid-cols-2 justify-between mt-5">
                            <div>
                                <div style={{ height: "140px", width: "140px", backgroundColor:"#666687"}}>

                                </div>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <div className="flex item-center">
                                    <p style={{marginTop:"6px"}} className="mr-5">Status:</p>
                                    <span className="status-badge no-border status-badge--brand--quaternary">Inactive</span>
                                </div>
                               
                            </div>
                        </div>


                        <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4 mt-5">
                            <div className="services-card-reg-side">
                                <div className="mt-1 reg-left-menu-first active-service-side">
                                    <p >Basic Detail</p>
                                </div>
                                <div className="reg-left-menu ">
                                    <p className="">Address</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Others</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Relative</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Referees</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Guarantors</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Medical</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Verification</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Current Subscription</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">Subscription History</p>
                                </div>
                                <div className="reg-left-menu">
                                    <p className="">E-Wallet</p>
                                </div>
                                
                            </div>
                            <div className="services-card col-span-4">
                                <h3 style={{ color: "#8E8EA9", fontWeight: "500", fontSize: "15px" }} className="">Basic Detail</h3>
                                <div className="mt-4">
                                   
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
        </div>
    )
}

export default RegistrationDetails;