import instance from "../api/instance";
import { AUTH_USER } from "./types";

function Auth(accessToken) {
  // state selector로 userData 받아와서 get 보내기
  if (accessToken) {
    console.log(accessToken);
    const request = instance.get(`api/user/${accessToken}`).then((response) => {
      if (response.data === "no user") {
        localStorage.removeItem("token");
      }
      return response.data;
    });
    return {
      type: AUTH_USER,
      payload: request,
    };
  }
  return {
    type: null,
    payload: null,
  };
}

export default Auth;
