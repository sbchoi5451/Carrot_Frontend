import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

// Access_Key 가져오는 함수
export const getAccessToken = () => {
  return Cookies.get("access_key");
};

// Refresh_Key 가져오는 함수
export const getRefreshToken = () => {
  return Cookies.get("refresh_key");
};

// 회원가입 - 아이디 중복검사
export const fetchCheckId = async (id) => {
  try {
    const response = await axiosInstance.post("/user/idCheck", id);
    if (response.data.msg === "사용중인 아이디입니다.") {
      return response.data.msg;
    }
    if (response.data.msg === "사용 가능한 아이디입니다.") return response.data.msg;
  } catch (err) {
    console.log("catch문 err:", err.response);
  }
};

// 회원가입
export const fetchSignUp = async (user) => {
  try {
    const response = await axiosInstance.post("/user/signup", user);
    return response;
  } catch (err) {
    return err;
  }
};

// 로그인
export const fetchLogin = async (user) => {
  try {
    const response = await axiosInstance.post("/user/login", user);

    if (response.data.msg === "성공") {
      const accessToken = response.headers["access_key"];
      const refreshToken = response.headers["refresh_key"];
      const token = accessToken.replace("Bearer", "");
      if (accessToken && refreshToken) {
        Cookies.set("access_key", accessToken);
        Cookies.set("refresh_key", refreshToken);
      }
    }
    return response;
  } catch (err) {
    return err;
  }
};

// 로그아웃
export const fetchLogout = async () => {
  try {
    const response = await axiosInstance.post("/user/logout", null, {
      headers: {
        access_key: getAccessToken(),
        refresh_key: getRefreshToken(),
      },
    });
  } catch (err) {
    throw err;
  }
};

// 유저 토큰 여부 확인 함수
export const fetchUserInfo = () => {
  const access_key = getAccessToken();
  const refresh_key = getRefreshToken();
  if (access_key && refresh_key) {
    // 유저 정보가 담긴 객체 전달
    const userInfo = jwtDecode(access_key);
    return userInfo;
  } else {
    return null;
  }
};
