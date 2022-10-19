import React, { Component } from "react";
import { Card } from "antd";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    }
  }
  render() {
    return (
      <Card title={this.state.title}>
        <div>{this.state}</div>
      </Card>
    )
  }
}

export default Detail;
