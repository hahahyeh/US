import { Card, Row, Col, Link, Button } from "antd";
import { AliwangwangOutlined } from "@ant-design/icons";
import React from "react";
import chat from "../assets/img/chat.png";
import how2 from "../assets/img/how2.png";
import how3 from "../assets/img/how3.png";

function Landing3(props) {
  const { Meta } = Card;
  let login = null;
  if (!props.currentUser) {
    login = (
      <div className="landing3-btn">
        <a href="http://49.50.175.14:8080/auth/google">
          <Button icon={<AliwangwangOutlined />}>
            구글 아이디로 US 시작하기
          </Button>
        </a>
      </div>
    );
  }
  return (
    <div className="landing3" id="landing3scroll">
      <div className="landing3-title">How??</div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8} style={{ paddingRight: "170px" }}>
            <Card
              hoverable
              style={{ width: 300, height: 350 }}
              cover={
                <img alt="example" src={chat} height="190px" width="210px" />
              }
            >
              <Meta
                className="landing3-card1"
                title="US와 대화하세요."
                description="US가 질문하면 대답해주세요. 여러번 대답해도 좋아요! 모든 대답은 소중하게 기록됩니다 ✎⁾⁾⁾"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 300, height: 350 }}
              cover={
                <img alt="example" src={how2} height="190px" width="210px" />
              }
            >
              <Meta
                className="landing3-card3"
                title="지난 하루를 열어보세요."
                description="날짜별로 기록된 US와의 대화를 언제나 열어볼 수 있어요. 달력에 날짜를 클릭해 나의 하루 하루를 확인하세요 ✿"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 300, height: 350 }}
              cover={
                <img alt="example" src={how3} height="190px" width="210px" />
              }
            >
              <Meta
                className="landing3-card2"
                title="나의 일상을 다른 사용자들과 공유하세요"
                description="내가 기록한 모든 일상은 공유하기 버튼을 통해 다른 US 사용자와 공유할 수 있어요. 공유된 친구들의 일상은 share 페이지를 통해 확인가능합니다 ˖◛⁺˖"
              />
            </Card>
          </Col>
        </Row>
        <div className="landing3-circle1"></div>
        <div className="landing3-circle2"></div>
        <div className="landing3-circle3"></div>
        <div className="landing3-circle4"></div>
      </div>
      {login}
    </div>
  );
}

export default Landing3;
