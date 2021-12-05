import { Button } from "antd";
import { AliwangwangOutlined } from "@ant-design/icons";
import React from "react";
import chat from "../assets/img/chat.png";
import { Link } from "react-scroll";
function Landing2() {
  return (
    <div className="landing2" id="landing2scroll">
      <div className="landing2-text">
        <div className="landing2-title">
          Talk With
          <span style={{ color: "#ec5863" }}> US</span>
          <br />& Share <span style={{ color: "#9ab1f3" }}> DAYS</span>
        </div>
        <div className="landing2-content">
          우리의 Untack Smalltalk, 대화를 통해 일상을 기록하고 공유하다
          <br />
          <br />
          <span>사소한 일상에 소중함을 느끼고 기록으로 남기고 싶은,</span>
          <br />
          나의 일상을 주변 사람들과 함께 공유하고 싶은,
          <br />
          <br />
          WITH US !
        </div>
        <div className="landing2-btn">
          <Link to="landing3scroll" spy={true}>
            <Button icon={<AliwangwangOutlined />}>더더 알아보기</Button>
          </Link>
        </div>
      </div>
      <div className="landing2-circle1"></div>
      <div className="landing2-circle2"></div>
      <div className="landing2-circle3"></div>
      <img className="landing2-img" src={chat} alt="example" />
    </div>
  );
}

export default Landing2;
