import React, { Component, useState } from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { BiLeftArrowAlt } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom";
import { Select, Space, Input } from 'antd';
import { useEffect } from "react";

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
const EditDocument = () => {
    const location = useLocation();
    const { routeProps } = location.state?.some || {};
    const [inputValues, setInputValues] = useState({ text: '' });


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const handleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value)
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };
    useEffect(() => {
        console.log(routeProps,"routeProps")
    }, [])
    return (
        <div className="w-full">
            <ServicesDiv module={"Contacts"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="performance_header flex"><Link to={"/services/contacts/kycverification"} className="mr-2"><BiLeftArrowAlt size={20} /></Link>{routeProps == null ? "Create New Document" : "Trading"} </h2>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card">
                                <h3 style={{ color: "#8E8EA9", fontWeight: "700", fontSize: "14px" }} className="">DOCUMENT INFORMATION</h3>
                                <div className="mt-4 mb-3">
                                    <label style={{ fontSize: "14px" }}>Document Name</label>
                                    <Input placeholder="Document Name" onChange={(e) => handleInput(e)} name="name"  value={routeProps?.name} />
                                </div>

                                <div className="mt-3">
                                    <label style={{ fontSize: "14px" }}>Description</label>
                                    <TextArea rows={17} placeholder="Enter Description" onChange={(e) => handleInput(e)} name="description" value={routeProps?.description} 
                                    // defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumsdssdssddds"} 
                                    />
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

export default EditDocument;