import { Menu, Button, Modal, Form, Input, Radio } from "antd";
import { AliwangwangOutlined } from "@ant-design/icons";
import React from "react";
import home from "../assets/img/home.png";
import { Link } from "react-scroll"
function Landing1() {
  return (
    <div className="landing1">
      <div className="landing1-text">
        <div className="landing1-title">Untack Smalltalk</div>
        <div className="landing1-content">
          US 와 대화하고 일상을 기록한다
          <br />
          지금 바로 시작해보세요
        </div>
        <div className="landing1-btn">
          <Link to="landing2scroll" spy={true} ><Button icon={<AliwangwangOutlined />}>더 알아보기</Button></Link>
        </div>
      </div>
      <img src={home} alt="home" className="landing1-img" />
      <div className="landing1-back"></div>
    </div>
  );
}

export default Landing1;
