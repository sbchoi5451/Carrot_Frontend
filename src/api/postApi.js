import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const postApi = axios.create({
    baseURL: process.env.REACT_APP_URL
})

// Access_Key 가져오는 함수
const getAccessToken = () => {
    return Cookies.get("access_key");
};

// Refresh_Key 가져오는 함수
const getRefreshToken = () => {
    return Cookies.get("refresh_key");
};

//status code 확인!
//1. get post
export const getPost = async () => {
    try {
        const response = await postApi.get("/post")
        return response.data.data
    } catch (err) {
        return err.response.status
    }
}

//2. get recommend post
export const getRecommendPost = async () => {
    try {
        const response = await postApi.get("/post/recommend")
        return response.data.data
    } catch (err) {
        return err.response.status
    }
}

//3. 검색 api
export const getKeywordApi = async (searchState) => {
    try {
        const response = await postApi.get(`/post/search?keyword=${searchState}`)
        return response.data.data
    } catch (err) {
        return err.response.status
    }
}

//4. 상세페이지 판매글 조회 (token 저장위치, key 수정필요)
export const getDetail = async (postId) => {
    try {
        const config = {
            headers: {
                access_key: getAccessToken(),
                refresh_key: getRefreshToken(),
            },
        }
        const response = await postApi.get(`/post/${postId}`, config)
        console.log(response.data.data)
        return response.data.data
    } catch (err) {
        return err.response.status
    }
}

//5. 상세페이지 거래상태 post
export const tradeStatePost = async (postId, tradeState) => {
    try {
        const config = {
            headers: {
                access_key: getAccessToken(),
                refresh_key: getRefreshToken(),
            },
        }
        await postApi.post(`/post/${postId}/tradestatus`, tradeState, config)
    } catch (err) {
        return err.response.status
    }
}


//6. 상세페이지 관심 post
export const interestPost = async (postId, interest) => {
    try {
        const config = {
            headers: {
                access_key: getAccessToken(),
                refresh_key: getRefreshToken(),
            },
        }
        await postApi.post(`/post/${postId}/interest`, interest, config)
    } catch (err) {
        console.log(err)
        return err.response.status
    }
}

//7. 판매글 수정 post // newData (title, content, price, tradeLocation, specificLocation, isShared, img**)
export const modifyPost = async (postId, newData) => {
    try {
        const config = {
            headers: {
                access_key: getAccessToken(),
                refresh_key: getRefreshToken(),
            },
        }
        await postApi.put(`/post/${postId}`, newData, config)
    } catch (err) {
        return err.response.status
    }
}

//8. myinterest
export const getMyInterest = async () => {
    try {
        const config = {
            headers: {
                access_key: getAccessToken(),
                refresh_key: getRefreshToken(),
            },
        }
        const response = await postApi.get('/mypage/interest', config)
        console.log('요거는 get interest', response.data.data)
        return response.data.data
    } catch (err) {
        return err.response.status
    }
}

//9. delete
export const deleteMyPost = async (postId) => {
    try {
        const config = {
            headers: {
                access_key: getAccessToken(),
                refresh_key: getRefreshToken(),
            }
        }
        await postApi.delete(`/post/${postId}/delete`, config)
        return;
    } catch (err) {
        return err.response.status
    }
}

export const updateMyPost = async (postId) => {
    try {
        const config = {
            headers: {
                access_key: getAccessToken(),
                refresh_key: getRefreshToken(),
            }
        }
        await postApi.put(`/post/up/${postId}`, config)
        return;
    } catch (err) {
        return err.response.status
    }
}