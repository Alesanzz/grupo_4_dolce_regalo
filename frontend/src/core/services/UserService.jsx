import axios from "axios"
export const listUser = async () => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}users/register`)
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