import axios from "axios"



export const CategoryAll = async (token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}category/all`, {
        headers: {'x-token' : token}
    })
    return responseJson
}
export const SeasonAll = async (token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}season/all`, {
        headers: {'x-token' : token}
    })
    return responseJson
}