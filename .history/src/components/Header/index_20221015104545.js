import React, { Component, Fragment } from "react"
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