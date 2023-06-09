import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

// Access_Key 가져오는 함수
const getAccessToken = () => {
  return Cookies.get("access_key");
};

// Refresh_Key 가져오는 함수
const getRefreshToken = () => {
  return Cookies.get("refresh_key");
};

// 판매글 작성 api
export const fetchAddPost = async (post) => {
  try {
    const formData = new FormData();

    // 게시글 내용 전부 post(객체) 변수에 저장
    for (let key in post) {
      formData.append(key, post[key]);
    }

    const response = await axiosInstance.post("/post/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        access_key: getAccessToken(),
        refresh_key: getRefreshToken(),
      },
    });

    console.log("성공시 응답부분임", response);
    return response;
  } catch (err) {
    throw err;
  }
};

// export const fetchAddPost = async (post) => {
//   try {
//     const response = await axiosInstance.post("/post/add", post, {
//       headers: {
//         access_key: getAccessToken(),
//         refresh_key: getRefreshToken(),
//       },
//     });
//     console.log("성공시 응답부분임", response);
//     console.log("내가보내는 데이터", post);
//     return;
//   } catch (err) {
//     console.log(err);
//   }
// };
