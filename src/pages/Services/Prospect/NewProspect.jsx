import React, { Component } from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { BiLeftArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom";
import { Select, Space, Input } from 'antd';
const { TextArea } = Input;


const options = [
    {
        label: 'Subscriber',
        value: 'document1',
        desc: 'Subscriber 1',
    },
    {
        label: 'Subscriber 2',
        value: 'document2',
        desc: 'Subscriber 2',
    },
    {
        label: 'Subscriber 3',
        value: 'document3',
        desc: 'Subscriber 3',
    }
];
const NewProspect = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="w-full">
            <ServicesDiv module={"Propects"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="performance_header flex"><Link to={"/services/prospects/"}><BiLeftArrowAlt size={20} /></Link> Create new prospect</h2>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card">
                                <h3 style={{ color: "#8E8EA9", fontWeight: "700", fontSize: "14px" }} className="">CONTACT INFORMATION</h3>
                                <div className="mt-4">
                                    <label style={{ fontSize: "14px" }}>Contact Type</label>
                                    <Select
                                        style={{
                                            width: '100%',
                                        }}
                                        className="mt-1 mb-1"
                                        placeholder="Select Contact Type"
                                        onChange={handleChange}
                                        options={options}
                                        optionRender={(option) => (
                                            <Space>
                                                {option.data.desc}
                                            </Space>
                                        )}
                                    />
                                </div>

                                <div className="mt-2 mb-1">
                                    <label style={{ fontSize: "14px" }}>Entity Type</label>
                                    <Select
                                        style={{
                                            width: '100%',
                                        }}
                                        className="mt-1 mb-1"
                                        placeholder="Select Contact Type"
                                        onChange={handleChange}
                                        options={options}
                                        optionRender={(option) => (
                                            <Space>
                                                {option.data.desc}
                                            </Space>
                                        )}
                                    />
                                </div>
                                <div class="grid grid-cols-1  md:grid-cols-[85%_15%] lg:gap-4">
                                    <div className="">
                                        <label style={{ fontSize: "14px" }}>Title</label>
                                        <Select
                                            style={{
                                                width: '100%',
                                            }}
                                            className="mt-1 mb-2"
                                            placeholder="Select Title"
                                            onChange={handleChange}
                                            options={options}
                                            optionRender={(option) => (
                                                <Space>
                                                    {option.data.desc}
                                                </Space>
                                            )}
                                        />
                                        <label style={{ fontSize: "14px" }}>Surname</label>
                                        <Input placeholder="Enter Surname" className="mb-2" />

                                        <label style={{ fontSize: "14px" }}>Firstname</label>
                                        <Input placeholder="Enter Firstname" />
                                    </div>
                                    <div className=" mt-4 md:mt-0">
                                        <label style={{ fontSize: "14px" }}>Upload Picture</label>
                                        <div style={{ height: "140px", width: "140px", backgroundColor: "#666687", }} className="rounded grid place-content-center">
                                            <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        </div>
                                        <button class="vtm-btn vtm-btn-success vtm-btn-sm mt-2 w-[140px]">Choose file</button>

                                    </div>
                                </div>
                                <div className="mt-4 flex lg:gap-4">
                                    <div className="w-[100%] lg:w-[50%]">
                                        <label style={{ fontSize: "14px" }}>Middle/Othername</label>
                                        <Input placeholder="Enter Surname" className="mb-2" />
                                    </div>
                                    <div className="w-[100%] lg:w-[50%]">
                                        <label style={{ fontSize: "14px" }}>Maiden/Former Name</label>
                                        <Input placeholder="Enter Surname" className="mb-2" />
                                    </div>
                                </div>
                                <div className="mt-2 flex lg:gap-4">
                                    <div className="w-[100%] lg:w-[50%]">
                                        <label style={{ fontSize: "14px" }}>Gender</label>
                                        <Select
                                            style={{
                                                width: '100%',
                                            }}
                                            className="mt-1 mb-2"
                                            placeholder="Select Gender"
                                            onChange={handleChange}
                                            options={options}
                                            optionRender={(option) => (
                                                <Space>
                                                    {option.data.desc}
                                                </Space>
                                            )}
                                        />
                                    </div>
                                    <div className="w-[100%] lg:w-[50%]">
                                        <label style={{ fontSize: "14px" }}>Date of birth</label>
                                        <Input placeholder="Enter Surname" className="mb-2" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: "2.5em", paddingRight: "2.5em" }} className="w-full border-b py-5 flex items-center justify-between box-container-footer large_screen">
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

export default NewProspect;