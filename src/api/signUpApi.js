import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

// 회원가입
export const fetchSignUp = async (user) => {
  try {
    const response = await axiosInstance.post("/user/signup", user);
    console.log(response);
    return;
  } catch (err) {
    console.log(err);
  }
};

// 로그인
export const fetchLogin = async (user) => {
  try {
    const response = await axiosInstance.post("/user/login", user);

    if (response.status === 200) {
      const accessToken = response.headers["access_key"];
      const refreshToken = response.headers["refresh_key"];

      if (accessToken && refreshToken) {
        Cookies.set("access-token", accessToken);
        Cookies.set("refresh-token", refreshToken);
      }

      return response.data.msg;
    }
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
    } else {
      console.log(err);
    }
  }
};
