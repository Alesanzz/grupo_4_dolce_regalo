import { useEffect } from "react";
import { useParams} from "react-router-dom"
import { ProductById } from "../../core/services/ProductsService";

export const ProductsId = () => {

    let {sku} = useParams();

    useEffect(()=> {
        getProductById(sku)
    }, [])

    const getProductById = async (sku) => {
        let token = localStorage.getItem('token')
        let response = await ProductById(sku, token);
        if(response.data.response){
            console.log(response);
        }
    }

    console.log(sku);
    return(
        <>
            <h1>Un producto</h1>
        </>
    )
}