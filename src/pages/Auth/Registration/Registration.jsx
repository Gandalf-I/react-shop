import React from 'react';
import {connect} from 'react-redux';
import {Button} from "antd";
import {Controller, useForm} from "react-hook-form";
import {EmailValidator, PasswordValidator} from "../../../validators";
import {InputField} from "../../../components/Inputs/Input";
import './Registration.scss'
import '../../../styles/Form.scss'

const Registration = () => {
  const { handleSubmit, control, getValues, errors } = useForm();

  const onSubmit = () => {
    console.log(getValues())
  };

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
        as={InputField("Password", errors.password)}
        name="password"
        control={control}
        defaultValue=''
        rules={
          {...PasswordValidator}
        }
      />
      <Button type="primary" size="large" htmlType="submit">
        Sign In
      </Button>
    </form>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(Registration);
