import axios from "axios";

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
    console.log("응답 헤더", response.header);
    return;
  } catch (err) {
    console.log(err);
  }
};
