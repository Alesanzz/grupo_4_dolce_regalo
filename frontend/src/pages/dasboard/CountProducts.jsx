import { useEffect, useState } from "react"
import { ProductsAlls } from "../../core/services/ProductsService";
import { responseError } from "../../utils/alerts";
import "./dasboard.css"

export const CountProducts = () => {
    const [productsCount, setProductsCount] = useState();
    const getCountProduct = async () => {
        try {
            let token = localStorage.getItem('token');
            let response = await ProductsAlls(token);
            if(response.data.response){
                setProductsCount(response.data.amount)
            }else{
                responseError(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        getCountProduct()
    }, [])
    return(
        <>
            <p className="number-info">{productsCount}</p>
        </>
    )    
}