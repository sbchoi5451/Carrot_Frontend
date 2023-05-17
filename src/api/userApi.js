import axios from 'axios';

const userApi = axios.create({
    baseURL: process.env.REACT_APP_URL
})

//1. 회원정보 get
export const getUser = async (userId, access, refresh) => {
    try {
        const config = {
            headers: {
                "access_key": access,
                "refresh_key": refresh
            }
        }
        return await userApi.get(`/user/${userId}`, config)
    } catch (err) {
        return err.response.status
    }
}