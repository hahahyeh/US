/* eslint-disable no-loop-func */
import React, { useState, useEffect } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import moment from "moment";
import autumn from "../assets/img/autumn.png";
import Icon from "@ant-design/icons";
import background from "../assets/img/diarybackground.png";
import send from "../assets/img/icon/send.png";
import instance from "../api/instance";
import Modal from "./Modals/Modal";

function Calendar(props) {

  const [getMoment, setMoment] = useState(moment());
  const [writtenDays, setWrittenDays] = useState([]);
  const [clickedDay, setClickedDay] = useState("");
  const [conversations, setConversations] = useState([]);
  const [inputText, setInputText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  useEffect(() => {
    const fetchWrittenDays = async () => {
      try {
        await instance
          .get(
            `/api/chat/all?user_id=${
              props.currentUser.id
            }&date=${getMoment.format("YYYYMMDD")}`
          )
          .then((response) => {
            setWrittenDays(response.data);
          });
      } catch (e) {}
    };
    fetchWrittenDays();
  }, []);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const handleDateClick = async (date) => {
    setClickedDay(date);
    try {
      await instance
        .get(`/api/chat?user_id=${props.currentUser.id}&date=${date}`)
        .then((response) => {
          setConversations(response.data);
        });
    } catch (e) {}
  };

  const conversationsRander = () => {
    const result = [];
    if (conversations === "no diary with this date") {
      return result;
    } else {
      for (let i = 0; i < conversations.length; i += 1) {
        result.push(
          <div className="page-content">
            <div className="page-title">{conversations[i].question}</div>
            <div className="page-text">{conversations[i].content}</div>
          </div>
        );
      }
    }
    return result;
  };

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week} style={{ cursor: "pointer" }}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <td
                    className="diary-cal-td-today"
                    onClick={() => {
                      handleDateClick(days.format("YYYYMMDD"));
                    }}
                  >
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else if (writtenDays.indexOf(days.format("YYYYMMDD")) !== -1) {
                return (
                  <td
                    className="diary-cal-td-witten"
                    onClick={() => {
                      handleDateClick(days.format("YYYYMMDD"));
                    }}
                  >
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td
                    className="diary-cal-td-normal"
                    onClick={() => {
                      handleDateClick(days.format("YYYYMMDD"));
                    }}
                  >
                    <span>{days.format("D")}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSend = async () => {
    try {
      await instance
        .post(`api/share`, {
          user_id: props.currentUser.id,
          email: inputText,
          date: clickedDay,
        })
        .then((response) => {
          if (response.data === "saved successfully") {
            alert("성공적으로 전송되었습니다");
            setModalOpen(false);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="diary">
      <div className="diary-calendar">
        <img src={autumn} alt="autumn" />
        <div className="diary-content">
          <div className="diary-title">
            <Icon
              className="diary-cal-btn"
              component={LeftOutlined}
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            ></Icon>
            <span>{today.format("YYYY 년 MM 월")}</span>
            <Icon
              className="diary-cal-btn"
              component={RightOutlined}
              onClick={() => {
                setMoment(getMoment.clone().add(1, "month"));
              }}
            ></Icon>
          </div>
          <div className="diary-text">
            <table>
              <tbody>{calendarArr()}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="diary-page">
        <div className="diary-page-convers">{conversationsRander()}</div>
        <img src={background} alt="back" className="diary-img" />

        <React.Fragment>
          <div className="diary-btn">
            <div>
              <img
                src={send}
                alt="send"
                classname="diary-sendbutton" /*onClick={saveUsertext}*/
                onClick={openModal}
                style={{ width: "55px" }}
              />
              <div>공유하기</div>
            </div>
          </div>
          <Modal
            open={modalOpen}
            close={closeModal}
            header="공유하기"
            handleSend={handleSend}
          >
            공유할 US 사용자의 이메일을 적어주세요 <br />
            소중하게 전달해드리겠습니다 🎔 <br /> <br />
            <input
              type="email"
              placeholder="이메일을 작성해주세요."
              value={inputText}
              onChange={onChangeInput}
            ></input>
          </Modal>
        </React.Fragment>
      </div>
    </div>
  );
}

export default Calendar;
