import React from "react";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import "./Inputs.scss"
import moment from 'moment';
import {DatePicker, InputNumber, Input} from "antd";
import TextArea from "antd/es/input/TextArea";

export const InputField = (placeholder, error) => {
  return (
    <Input
      className={error && 'Error'}
      size="large"
      placeholder={placeholder}
    />
  );
}

export const InputPasswordField = (placeholder, error) => {
  return (
    <Input.Password
      className={error && 'Error'}
      size="large"
      placeholder={placeholder}
      iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
    />
  );
}

export const TextAreaField = (placeholder, error, maxLength) => {
  return (
    <TextArea
      className={error && 'Error'}
      placeholder={placeholder}
      showCount
      maxLength={maxLength || 100}
    />
  );
}

export const PriceField = (placeholder, error) => {
  return (
    <InputNumber
      className={error && 'Error'}
      placeholder={placeholder}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      // onChange={onChange}
    />
  );
}

export const DiscountField = (placeholder, error) => {
  return (
    <InputNumber
      className={error && 'Error'}
      min={10}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      placeholder={placeholder}
      // onChange={onChange}
    />
  );
}

export const DateField = (placeholder, error) => {

  function disabledDate(current) {
    return current && current < moment().endOf('day');
  }

  return (
    <DatePicker
      className={error && 'Error'}
      format="YYYY-MM-DD"
      size="large"
      placeholder={placeholder}
      // onChange={onChange}
      picker="date"
      disabledDate={disabledDate}
    />
  )
}

export const UploadImageField = (placeholder, error) => {

  function disabledDate(current) {
    return current && current < moment().endOf('day');
  }

  return (
    <DatePicker
      className={error && 'Error'}
      format="YYYY-MM-DD"
      size="large"
      placeholder={placeholder}
      // onChange={onChange}
      picker="date"
      disabledDate={disabledDate}
    />
  )
}
