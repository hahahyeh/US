/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Auth from "../_actions/user_action";
import LandingPage from "../views/LandingPage";

export default function (SpecificComponent, option, adminRoute = null) {
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck(props) {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();

    if (!token) {
      console.log("로그인 실패");
      //window.location.replace("/");
      return <LandingPage />;
    }
    dispatch(Auth(token)).then((response) => {
      console.log("로그인 성공");
    });
    // 로그인 한 유저인 경우
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
