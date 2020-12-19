import React from 'react';
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import './Loader.scss'

const Loader = () => {
  return (
    <Spin className='Spin' indicator={
      <LoadingOutlined className="Loader" spin/>
    }/>
  );
}

export default Loader
