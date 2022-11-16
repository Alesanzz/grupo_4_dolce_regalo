import { DialogContent, DialogTitle } from "@mui/material"
import { useEffect, useState } from "react";
import { ProductById } from "../../../core/services/ProductsService";
import "./productid-view.css"
export const ProductViewId = (props) => {
    console.log(props);
    const [productId, setProductId] = useState({});

    const getProductsId = async () => {
        let token = localStorage.getItem('token');
        let response = await ProductById(props.sku, token);
        if (response.data.response) {
            setProductId(response.data.product)
        }
    }
    useEffect(() => {
        getProductsId()
    }, [])
    return (
        <>
            <div className="row container-productid">
                <div className="icon-close">
                    <svg onClick={props.onClose} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                </div>
                <div className="col-md-6">
                    <DialogContent>
                        <figure>
                            <img className="imagen-view-productid" src={`${process.env.REACT_APP_PATH}images/products/${productId?.image}`} alt="" />
                        </figure>
                    </DialogContent>
                </div>
                <div className="col-md-6">
                    <DialogContent>
                        <div className="content-info-productId">
                            <p className="title-product">{productId?.name}</p>
                            <p className="texto-info">Precio: <span className="texto-data">  {productId?.price} </span> </p>
                            <p className="texto-info">Categoria:<span className="texto-data"> {productId.Category?.name} </span></p>
                            <p className="texto-info">Temporada: <span className="texto-data"> {productId.Season?.name} </span></p>
                            <p className="texto-info"><span className="texto-data"> {productId?.description} </span></p>
                        </div>
                    </DialogContent>
                </div>
            </div>
        </>
    )
}
