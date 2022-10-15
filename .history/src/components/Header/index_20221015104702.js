import React, { Component, Fragment, {useS} } from "react"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from './logo.png'
import './style.css'

class AppHeader extends Component {
    render() {
        return (
            <Fragment>
                <img src={logo} className="app-header-logo" />
            </Fragment>
        )
    }
}

export default AppHeader