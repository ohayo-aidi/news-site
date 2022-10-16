import React, { Component } from "react";
import { Divider, List, Typography } from "antd";
import axios from "axios";

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
 