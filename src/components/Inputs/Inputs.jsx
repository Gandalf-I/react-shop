import React from "react";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined} from "@ant-design/icons";
import moment from 'moment';
import {DatePicker, InputNumber, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import "./Inputs.scss"

export const InputField = (prop) => {
  return (
    <Input
      {...prop}
      size="large"
    />
  );
}

export const EmailField = (prop) => {
  return (
    <Input
      {...prop}
      size="large"
      prefix={<MailOutlined/>}
    />
  );
}

export const InputPasswordField = (prop) => {
  return (
    <Input.Password
      {...prop}
      size="large"
      prefix={<LockOutlined/>}
      type="password"
      iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
    />
  );
}

export const TextAreaField = (prop) => {
  return (
    <TextArea
      {...prop}
      showCount
      size="large"
      maxLength={prop.maxLength || 100}
    />
  );
}

export const PriceField = (prop) => {
  return (
    <InputNumber
      {...prop}
      min={0}
      size="large"
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
    />
  );
}

export const DiscountField = (prop) => {
  return (
    <InputNumber
      {...prop}
      min={10}
      max={90}
      size="large"
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
    />
  );
}

export const DateField = (prop) => {

  function disabledDate(current) {
    return current && current < moment().endOf('day');
  }

  return (
    <DatePicker
      {...prop}
      format="YYYY-MM-DD"
      size="large"
      picker="date"
      disabledDate={disabledDate}
    />
  )
}
