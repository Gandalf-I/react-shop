import {Controller, useForm} from "react-hook-form";
import {InputField, InputPasswordField} from "../../../components/Inputs/Inputs";
import {EmailValidator, PasswordValidator} from "../../../validators";
import {Button} from "antd";
import React from "react";
import '../../../styles/Form.scss'

const FormAuth = ({submit, name}) => {
  const {handleSubmit, control, getValues, errors} = useForm();

  const onSubmit = () => {
    submit(getValues());
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='Form'>
      <Controller
        as={InputField("Email", errors.email)}
        name="email"
        control={control}
        defaultValue=''
        rules={
          {...EmailValidator}
        }
      />
      <Controller
        as={InputPasswordField("Password", errors.password)}
        name="password"
        control={control}
        defaultValue=''
        rules={
          {...PasswordValidator}
        }
      />
      <Button type="primary" size="large" htmlType="submit">
        {name}
      </Button>
    </form>
  )
}

export default FormAuth
