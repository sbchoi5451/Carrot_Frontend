import axios from "axios";

const baseApi = axios.create({
    baseURL: process.env.REACT_APP_URL
})

export const getPost = async () => {
    try {
        const response = await axios.get(baseApi)
        return response.data.data
    } catch (err) {
        console.log(err)
    }
}