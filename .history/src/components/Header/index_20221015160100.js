import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState, Component, Fragment } from "react";
import { get } from './././utils/request.js'

const items = [

];
const AppHeader = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const getMenuItem = async () => {

  }
  return (
    <Fragment>
      {/* <img src={logo} className="app-header-logo" /> */}
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </Fragment>
  );
};
export default AppHeader;
