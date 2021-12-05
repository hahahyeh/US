/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Auth from "../_actions/user_action";
import queryString from "query-string";
import LandingPage from "../views/LandingPage";

export default function () {
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function Login(props) {
    const token = queryString.parse(props.location.search).accessToken;
    console.log(token);
    localStorage.setItem("token", token);
    const dispatch = useDispatch();
    if (!token) {
      window.location.replace("/");
    } else {
      window.location.replace("/");
    }
    useEffect(() => {
      // 서버에 요청 보내서 지금 페이지에 들어가려는 사람의 로그인 정보나 role등을 확인할 수 있다.
      dispatch(Auth(token)).then((response) => {});
    });
    return <LandingPage />;
  }
  return Login;
}
