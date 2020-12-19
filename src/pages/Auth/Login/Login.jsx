import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {useForm, Controller} from "react-hook-form";
import {EmailValidator, PasswordValidator} from "../../../validators";
import './Login.scss'
import '../../../styles/Form.scss'
import {InputField, InputPasswordField} from "../../../components/Inputs/Input";

const Login = () => {
  const {handleSubmit, control, getValues, errors} = useForm();

  const onSubmit = () => {
    console.log(getValues());
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
        as={InputPasswordField("Password", errors.password)}
        name="password"
        control={control}
        defaultValue=''
        rules={
          {...PasswordValidator}
        }
      />
      <Button type="primary" size="large" htmlType="submit">
        Log In
      </Button>
    </form>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(Login);
