import React, { useState, useEffect } from "react";
import back from "../assets/img/Chatbackground.png";
import redo from "../assets/img/icon/redo.png";
import okay from "../assets/img/icon/okay.png";
import close from "../assets/img/icon/close.png";
import pencil2 from "../assets/img/icon/pencil2.png";
import instance from "../api/instance";
import Modal from "./Modals/Modal";
function Chat(props) {
  const [question, setQuestion] = useState("");
  const [inputText, setInputText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const fetchQuesiton = async () => {
      try {
        await instance
          .get(`/api/question/${props.currentUser.id}`)
          .then((response) => {
            setQuestion(response.data);
          });
      } catch (e) {}
    };
    fetchQuesiton();
  }, []);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };
  const onRedo = async () => {
    setInputText("");
    try {
      await instance
        .get(`/api/question/${props.currentUser.id}`)
        .then((response) => {
          setQuestion(response.data);
        });
    } catch (e) {}
  };
  const handleSave = (e) => {
    e.preventDefault();
    let data = {
      user_id: props.currentUser.id,
      content: inputText,
      question,
      nickname: props.currentUser.nickname,
    };
    if (inputText === "") {
      alert("내용을 입력하세요.");
      return;
    }
    instance.post(`api/chat`, data).then(async (response) => {
      if (response.data === "saved successfully") {
        alert("정상적으로 기록되었습니다.");
        setInputText("");
        try {
          await instance
            .get(`/api/question/${props.currentUser.id}`)
            .then((response) => {
              setQuestion(response.data);
            });
        } catch (e) {}
      }
    });
  };
  return (
    <div className="Chat1">
      {/* 서버에서 받아온 챗봇 데이터     */}
      <div className="Chat1-chatbottext">{question}</div>

      {/* 사용자 입력하는 부분 */}
      <div>
        <textarea
          className="Chat1-usertext"
          value={inputText}
          onChange={onChangeInput}
          cols="100"
          rows="20"
          placeholder="이곳에 텍스트를 작성해주세요."
        />

        <div className="chat1-btn">
          <div>
            <img
              src={okay}
              alt="okay"
              classname="Chat1-okbutton" /*onClick={saveUsertext}*/
              style={{ width: "55px" }}
              onClick={handleSave}
            />
            <div>확인</div>
          </div>

          <div>
            <img
              src={close}
              alt="close"
              classname="Chat1-resetbutton"
              style={{ width: "55px" }}
              onClick={onReset}
            />
            <div>취소</div>
          </div>
          <div>
            <img
              src={redo}
              alt="redo"
              classname="Chat1-redobutton"
              style={{ width: "55px" }}
              onClick={onRedo}
            />
            <div>다시</div>
          </div>
        </div>
      </div>
      <img src={back} alt="back" className="chat1-img" />
    </div>
  );
}

export default Chat;
