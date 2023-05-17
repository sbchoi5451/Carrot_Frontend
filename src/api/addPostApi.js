import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

// 판매글 작성 api
export const fetchAddPost = async (post) => {
  try {
    const response = await axiosInstance.post("/post/add", post);
    console.log("성공시 응답부분임", response);
    return;
  } catch (err) {
    console.log(err);
  }
};
