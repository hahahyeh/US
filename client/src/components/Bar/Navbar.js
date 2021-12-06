import { Menu, Button } from "antd";
import {
  BookOutlined,
  WechatOutlined,
  HomeOutlined,
  GoogleOutlined,
  LogoutOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React from "react";
import { withRouter } from "react-router-dom";
import instance from "../../api/instance";

function NavBar(props) {
  const token = localStorage.getItem("token");
  let login = null;
  let logout = null;
  let share = null;
  let chat = null;
  let diary = null;
  let home = null;

  const handleLogout = async () => {
    await instance
      .get(`/api/user/logout/${token}`)
      .then((response) => response.data);
    localStorage.removeItem("token");
    window.location.replace("/");
  };
  // 로그인 안 했을 때
  if (!token) {
    login = (
      <div className="nav-btn">
        <a href="http://untacttalk.shop:8080/auth/google">
          <Button icon={<GoogleOutlined />}>Sign In With Google</Button>
        </a>
      </div>
    );
  } else {
    logout = (
      <Menu.Item icon={<LogoutOutlined />} onClick={handleLogout}>
        LOGOUT
      </Menu.Item>
    );
    home = (
      <Menu.Item
        icon={<HomeOutlined />}
        onClick={() => {
          props.history.push("/");
        }}
      >
        HOME
      </Menu.Item>
    );
    share = (
      <Menu.Item
        icon={<HeartOutlined />}
        onClick={() => {
          props.history.push("/share");
        }}
      >
        SHARE
      </Menu.Item>
    );
    chat = (
      <Menu.Item
        icon={<WechatOutlined />}
        onClick={() => {
          props.history.push("/chat");
        }}
      >
        CHAT
      </Menu.Item>
    );
    diary = (
      <Menu.Item
        icon={<BookOutlined />}
        onClick={() => {
          props.history.push("/diary");
        }}
      >
        DIARY
      </Menu.Item>
    );
  }
  return (
    <div className="nav">
      <div className="nav-title">
        <h1>US</h1>
      </div>
      <div className="nav-item">
        <Menu mode="horizontal" style={{ borderBottom: "none" }}>
          {home}
          {chat}
          {diary}
          {share}
          {logout}
        </Menu>
      </div>
      {login}
    </div>
  );
}

export default withRouter(NavBar);
