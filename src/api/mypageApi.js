import axios from "axios";
import { getAccessToken, getRefreshToken } from "./signUpApi";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

// 관심목록 가져오는 함수
export const fetchInterestedList = async () => {
  try {
    const response = await axiosInstance.post("/mypage/interest", null, {
      headers: {
        access_key: getAccessToken(),
        refresh_key: getRefreshToken(),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response);
    } else {
      console.log(err);
    }
  }
};
