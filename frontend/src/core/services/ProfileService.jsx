import axios from "axios"



export const listUserById = async (id, token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}users/${id}`, {
        headers: {'x-token': token}
    })
    return responseJson
}
export const updateUserById = async (id, data , token) => {
    const responseJson = await axios.post(`${process.env.REACT_APP_API_LOCAL}users/update/${id}`, data , {
        headers: {'x-token': token}
    })
    return responseJson
}

