import axios from "axios"

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