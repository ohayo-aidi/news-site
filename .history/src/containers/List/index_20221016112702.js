import React, { Component } from "react";
import { Divider, List, Typography } from "antd";
import axios from "axios";
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

class PageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    let url = "http://www.dell-lee.com/react/api/list.json";
    const id = this.props.match.params.id; //api: this.props
    if (id) {
      url = url + "?id=" + id;
    }
    axios.get(url).then((res) => {
      this.setState({
        data: res.data.data,
      });
    });
  }

  render() {
    return (
      <List
        style={{ background: "#fff" }}
        bordered
        dataSource={this.state.data}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
    );
  }
}
export default PageList;
 