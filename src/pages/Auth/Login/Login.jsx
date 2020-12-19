import React from 'react';
import {connect} from 'react-redux';
import {Button, Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {useForm} from "react-hook-form";
import {EmailValidator, PasswordValidator} from "../../../validators";
import './Login.scss'
import '../../../styles/Form.scss'

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='Form'>
      <Input
        size="large"
        placeholder="Email"
        ref={
          register({...EmailValidator})
        }
      />
      <Input.Password
        size="large"
        placeholder="Password"
        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
        ref={
          register({...PasswordValidator})
        }
      />
      <Button type="primary" size="large">
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
