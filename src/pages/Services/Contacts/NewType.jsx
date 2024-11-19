import React, { Component, useState } from "react";
import ServicesDiv from "../ServicesDiv";
import "../services.css"
import { BiLeftArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom";
import { Select, Space, Input } from 'antd';
import { usePostData } from "@/hooks/usePostData";
import { baseUrl } from "@/App";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';

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
const Newype = () => {
    const navigate = useNavigate()
const [loading, setLoading] = useState(false)
    const [inputValues, setInputValues] = useState({text: ''});


    const titleUrl = `${baseUrl}services/contacts/type`;

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
    const postMutation = usePostData({
        queryKey: ["type"],
        url: titleUrl,
        title: "type",
    });
    function isNullOrEmpty(value) {
        return value === null || value === undefined || value.trim() === '';
    }

    const handleCreateNewType = async () => {
        if (isNullOrEmpty(inputValues?.code) || isNullOrEmpty(inputValues?.description) || isNullOrEmpty(inputValues?.name)){
            alert("Code, Contact Type and Description are required fields");
            return;
        }
        setLoading(true)
        const body = {
            code: inputValues?.code,
            name: inputValues?.name,
            description: inputValues?.description
        };
        postMutation.mutateAsync(body)
        .then((res) => {
            console.log(res)
            setLoading(false)
            navigate('/services/contacts/type')
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })

    }
    return (
        <div className="w-full">
            <ServicesDiv module={"Contacts"} />
            <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">

                <div className="flex justify-between w-full items-center">
                    <div className="main-container">
                        <div class="flex justify-between">
                            <div>
                                <h2 className="performance_header flex"><Link to={"/services/contacts/type"}><BiLeftArrowAlt size={20} /></Link> New Contact Type</h2>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                            <div className="services-card">
                                <h3 style={{ color: "#8E8EA9", fontWeight: "700", fontSize: "14px" }} className="">USER TYPE INFORMATION</h3>
                                <div className="mt-4">
                                    <label style={{ fontSize: "14px" }}>Code</label>
                                    <Input onChange={(e) => handleInput(e)} name="code"  placeholder="Enter code" />
                                </div>

                                <div className="mt-2">
                                    <label style={{ fontSize: "14px" }}>Contact Type</label>
                                    <Input onChange={(e) => handleInput(e)} name="name"  placeholder="Enter contact type" />
                                </div>

                                <div className="mt-2">
                                    <label style={{ fontSize: "14px" }}>Description</label>
                                    <TextArea onChange={(e) => handleInput(e)} name="description" rows={6} placeholder="Enter Description" />
                                </div>
                            </div>
                            <div className="services-card mt-2">
                                <h3 style={{ color: "#8E8EA9", fontWeight: "700", fontSize: "14px" }} className="">APPLICABLE KYC DOCUMENT</h3>
                                <div className="mt-4">
                                    <label style={{ fontSize: "14px" }}>KYC Document</label>
                                    <Select
                                        mode="multiple"
                                        style={{
                                            width: '100%',
                                        }}
                                        className="mt-1 mb-4"
                                        placeholder="Select KYC Documents"
                                        onChange={handleChange}
                                        options={options}
                                        optionRender={(option) => (
                                            <Space>
                                                {option.data.desc}
                                            </Space>
                                        )}
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
                <button onClick={() => handleCreateNewType()} type="button" style={{ height: "100%" }} className=" services-newtype-submit services-no-radius">
                    {loading ? <LoadingOutlined style={{ fontSize: "30px" }} spin /> : "Submit"}
                </button>
            </div>
        </div>
    )
}

export default Newype;