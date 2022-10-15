import React, { Component, Fragment, useState } from "react"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from './logo.png'
import './style.css'

const items = [
    {
        label: 'VOA slow'
    }
]
class AppHeader extends Component {
    render() {
        return (
          <Fragment>
            <img src={logo} className="app-header-logo" />
            <Menu mode="horizontal" className="app-header-menu">
            </Menu>
          </Fragment>
        );
    }
}

export default AppHeader