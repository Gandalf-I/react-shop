import {Form, Button} from "antd";
import React from "react";
import "./FormAuth.scss"
import {EmailValidator, PasswordValidator} from "../../../validators";
import {EmailField, InputPasswordField} from "../../../components/Inputs/Inputs";

const FormAuth = ({submit, name}) => {

  const onFinish = values => {
    submit(values);
  };

  return (
    <Form
      name="auth"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        rules={EmailValidator}
      >
        <EmailField placeholder="Email"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={PasswordValidator}
      >
        <InputPasswordField placeholder="Password"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="FormButton">
          {name}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormAuth
