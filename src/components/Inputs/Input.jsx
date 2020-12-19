import React from "react";
import { Input } from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import "./Input.scss"

export const InputField = (placeholder, error) => {
  return <Input
    className={error && 'Error'}
    size="large"
    placeholder={placeholder}
  />;
}

export const InputPasswordField = (placeholder, error) => {
  return <Input.Password
    className={error && 'Error'}
    size="large"
    placeholder={placeholder}
    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
  />;
}
