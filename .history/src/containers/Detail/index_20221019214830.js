import React, { Component } from "react";
import { Card } from "antd";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "title title 3",
      content: "content content 3",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://www.dell-lee.com/react/api/detail.json?id=" + id)
      .then((res) => {
        const data = res.data.data;
        this.setState(data);
      });
  }

  render() {
    return (
      <Card title={this.state.title}>
        <div>{this.state.content}</div>
      </Card>
    );
  }
}

export default Detail;
