import React from 'react';
import {Tabs} from 'antd';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import './Auth.scss';
const {TabPane} = Tabs;

const Auth = () => {
  return (
    <Tabs
      size="large"
      defaultActiveKey="1"
      centered
      className="Tabs"
    >
      <TabPane tab="Log In" key="1" className="Tab">
        <Login/>
      </TabPane>
      <TabPane tab="Sign Up" key="2" className="Tab">
        <Registration/>
      </TabPane>
    </Tabs>
  );
}

export default Auth
