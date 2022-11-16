import axios from "axios"
export const listUser = async (token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}users/register`, {
        headers: {'x-token': token}
    })
    return responseJson
}
export const UserAll = async (size, page , token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}users/all?size=${size}&page=${page}`, {
        headers: {'x-token': token}
    })
    return responseJson
}

export const CreateUser = async (data) => {
    const responseJson = await axios.post(`${process.env.REACT_APP_API_LOCAL}users/register`, data)
    return responseJson
}   
export const LoginUser = async (data) => {
    const responseJson = await axios.post(`${process.env.REACT_APP_API_LOCAL}users/login`, data)
    return responseJson
}   