import React from 'react';
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";

const DownloadItem = (props) => {
    return (
        <div className={"images-item"}>
            Image {props.name}
            <Button  href={props.link} download target="_blank" type="primary" icon={<DownloadOutlined/>} size="large">Download {props.name} {props.width}x{props.height}</Button>
        </div>
    );
};

export default DownloadItem;