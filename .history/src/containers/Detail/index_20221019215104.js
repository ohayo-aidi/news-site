import React, { Component } from "react";
import axios from "axios";
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
        this.setState(data);// data直接分成title 和 content 可以直接setState(data) 也可以setState( title: data.title , content: data.content)
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
