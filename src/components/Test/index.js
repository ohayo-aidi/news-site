import React, { Component } from "react";
import { Modal, Button } from "antd";
class Test extends Component {
    render() {
        return (
          <div>
            <Modal
              title="Basic Modal"
              visible={true}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        );
    }
}
 export default Test
