import React, { Component } from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const OverlayLoader = () => {

    
    return (
     <>
            <Spin indicator={<LoadingOutlined style={{
                color: "#fff",
                fontSize: "48px"
            }} spin />} fullscreen size="large" />
     </>
    )
}

export default OverlayLoader;