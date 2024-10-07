import Tables from "@/pages/Services/Tables/Tables";
import React, { Component, useState } from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
    BsEnvelopeFill,
    BsGeoAltFill,
    BsTelephoneFill,
    BsTrash,
    BsPencil,
} from "react-icons/bs";
import { Space, Modal, Input, Select } from "antd";
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
const tableHeader = [
    "REQUEST TYPE",
    "DESCRIPTION",
    "SLA",
    "ACTION"
];
const tableRows = [
    {
        requesttype: "LOGIN ISSUE",
        description: "Inability to login",
        sla: "1:00",
        entitytype: "INDIVIDUAL",
        action: (
            <>
                <Space>
                    <Link to={"/services/contacts/documentinformation"}><BsPencil size={17} color="" className="mr-2" /> </Link>
                    <BsTrash size={17} color="#D02B20" />
                </Space>
            </>
        ),
        datejoined: "15-JUN-2024",
    }
];

const ContactRequestTypes = () => {
    const [displayType, setdisplayType] = useState("documents");
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const constToggleDisplayType = (x) => {
        setdisplayType(x);
    };

    return (
        <div className="w-{full">
            <Modal footer={[]} title="Add New Request Type" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="mt-5">
                    <label  style={{ fontSize: "14px" }}>Surname</label>
                    <Input placeholder="Enter Surname" className="mb-2" />
               </div>
                <div className="mt-2">
                    <label style={{ fontSize: "14px" }}>Description</label>
                    <TextArea rows={6} placeholder="Enter Description" />
                </div>
                <div className="mt-2">
                    <label style={{ fontSize: "14px" }}>Resolution SLA</label>
                    <Select
                        style={{
                            width: '100%',
                        }}
                        className="mt-1 mb-1"
                        placeholder="Select CSLA"
                        // onChange={handleChange}
                        options={options}
                        optionRender={(option) => (
                            <Space>
                                {option.data.desc}
                            </Space>
                        )}
                    />
                </div>
                <div className="mt-2">
                    <label style={{ fontSize: "14px" }}>Re-open SLA</label>
                    <Select
                        style={{
                            width: '100%',
                        }}
                        className="mt-1 mb-1"
                        placeholder="Select CSLA"
                        // onChange={handleChange}
                        options={options}
                        optionRender={(option) => (
                            <Space>
                                {option.data.desc}
                            </Space>
                        )}
                    />
                </div>

                <div className="mt-2 flex justify-between w-full">
                    <button onClick={() => handleCancel()} className="vtm-btn btn-sm vtm-btn-outline">
                        Cancel
                    </button>
                    <button className="services-bg-blue services-btn services-btn-sm services-no-radius">
                        Submit
                    </button>
                </div>

               
            </Modal>
            <ServicesDiv module={"Support"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">
                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div className="flex gap-3">
                                <h2 className="uppercase performance_header my-auto">
                                    Request Types
                                </h2>
                                <div className="negative-positive-btn bg-white">
                                    <div className="filter-button-text-service flex justify-between">
                                        A -
                                    </div>
                                </div>
                                <div className="negative-positive-btn bg-white">
                                    <div className="filter-button-text-service flex justify-between">
                                        A +
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Link onClick={showModal}>
                                    <button  type="button" style={{ height: "100%" }} className="services-bg-blue services-btn services-btn-sm services-no-radius">Create New</button>
                                </Link>

                                <div className="services-btn-border bg-white">
                                    <div className="filter-button-text-service flex justify-between">Filter &nbsp;<IoFilter /></div>

                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card ">
                                {/* <Space className="mb-5">
                  <button
                    onClick={() => constToggleDisplayType("documents")}
                    style={{ backgroundColor: "green", color: "#fff" }}
                    className="status-badge no-border status-badge--ofsted--outstanding"
                  >
                    Documents
                  </button>
                  <button
                    onClick={() => constToggleDisplayType("verification")}
                    className="status-badge no-border status-badge--ofsted--outstanding"
                  >
                    Verification
                  </button>
                </Space> */}
                                {displayType == "documents" && (
                                    <Tables headerArr={tableHeader} rowArr={tableRows} />
                                )}
                                {/* {displayType == "verification" && (
                  <Tables
                    headerArr={tableHeaderVerification}
                    rowArr={tableRowsVerification}
                  />
                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactRequestTypes;
