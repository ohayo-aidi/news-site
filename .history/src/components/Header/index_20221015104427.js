import React, { Component, Fragment } from "react"
import logo from './logo.png'
import './style.css'

class AppHeader extends Component {
    render() {
        return (
            <Fragment>
                <img src={logo} className="app-header-" />
            </Fragment>
        )
    }
}

export default AppHeader