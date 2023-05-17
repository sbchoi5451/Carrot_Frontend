import axios from 'axios';

const postApi = axios.create({
    baseURL: process.env.REACT_APP_URL
})

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
export const getDetail = async (postId, access, refresh) => {
    try {
        const config = {
            headers: {
                "access_key": access,
                "refresh_key": refresh
            }
        }
        const response = await postApi.get(`/post/${postId}`, config)
        return response.data.data
    } catch (err) {
        return err.response.status
    }
}

//5. 상세페이지 거래상태 post
export const tradeStatePost = async (postId, tradeState, access, refresh) => {
    try {
        const config = {
            headers: {
                "access_key": access,
                "refresh_key": refresh
            }
        }
        await postApi.post(`/post/${postId}/tradestatus`, tradeState, config)
    } catch (err) {
        return err.response.status
    }
}


//6. 상세페이지 관심 post
export const interestPost = async (postId, interest, access, refresh) => {
    try {
        const config = {
            headers: {
                "access_key": access,
                "refresh_key": refresh
            }
        }
        await postApi.post(`/post/${postId}/interest`, interest, config)
    } catch (err) {
        return err.response.status
    }
}

//7. 판매글 수정 post // newData (title, content, price, tradeLocation, specificLocation, isShared, img**)
export const modifyPost = async (postId, newData, access, refresh) => {
    try {
        const config = {
            headers: {
                "access_key": access,
                "refresh_key": refresh
            }
        }
        await postApi.put(`/post/${postId}`, newData, config)
    } catch (err) {
        return err.response.status
    }
}