import React from 'react';
import {connect} from 'react-redux';
import {Button, Input} from "antd";
import {useForm} from "react-hook-form";
import {EmailValidator, PasswordValidator} from "../../../validators";
import './Registration.scss'
import '../../../styles/Form.scss'

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
      <Input
        size="large"
        placeholder="Email"
        ref={
          register({
            ...EmailValidator
          })
        }
      />
      <Input
        size="large"
        placeholder="Password"
        ref={
          register({
            ...PasswordValidator
          })
        }
      />
      <Button type="primary" size="large">
        Sign Up
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
