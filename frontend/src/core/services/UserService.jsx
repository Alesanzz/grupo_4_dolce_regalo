import axios from "axios"
const API = `http://localhost:4000/api/v1/dolceregalo/`
export const listUser = async () => {
    const responseJson = await axios.get(`${API}users/register`)
    return responseJson
}

export const CreateUser = async (data) => {
    const responseJson = await axios.post(`${API}users/register`, data)
    return responseJson
}   
export const LoginUser = async (data) => {
    const responseJson = await axios.post(`${API}users/login`, data)
    return responseJson
}   