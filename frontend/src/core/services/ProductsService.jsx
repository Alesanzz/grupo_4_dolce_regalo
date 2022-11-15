import axios from "axios"

export const ProductsAlls = async (token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}products/alls`, {
        headers: {'x-token' : token}
    })
    return responseJson
}
export const ProductsAll = async (size, page, token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}products/all?size=${size}&page=${page}`, {
        headers: {'x-token' : token}
    })
    return responseJson
}
export const ProductById = async (sku, token) => {
    const responseJson = await axios.get(`${process.env.REACT_APP_API_LOCAL}products/${sku}`, {
        headers: {'x-token' : token}
    })
    return responseJson
}
export const ProductCreate = async (data, token) => {
    const responseJson = await axios.post(`${process.env.REACT_APP_API_LOCAL}products/create`, data, {
        headers: {'x-token' : token}
    })
    return responseJson
}

export const ProductDelete = async (sku, token) => {
    const responseJson = await axios.delete(`${process.env.REACT_APP_API_LOCAL}products/delete/${sku}`, {
        headers: {'x-token' : token}
    })
    return responseJson
}