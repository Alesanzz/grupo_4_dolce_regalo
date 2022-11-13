import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductById } from "../../core/services/ProductsService";
import "./product.css"
export const ProductsId = () => {

    let { sku } = useParams();
    let [product, setProduct] = useState();

    useEffect(() => {
        getProductById(sku)
    }, [])

    const getProductById = async (sku) => {
        let token = localStorage.getItem('token')
        let response = await ProductById(sku, token);
        if (response.data.response) {
            setProduct(response.data.product)
            console.log(response);
        }
    }

    console.log(sku);
    return (
        <>
            <div className="container-one-product">
                <div className="card card-one-product">
                    <div className="row">
                        <div className="col-md-6">
                            <figure className="img-one-product">
                                <img src={`/images/products/${product?.image}`} alt="" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <div className="info-one-product">
                                <h3 className="text-center">{product?.name}</h3>
                                <p>Precio: ${product?.price}</p>
                                <p>Categoria: {product?.Category.name}</p>
                                <p>Temporada: {product?.Season.name}</p>
                                <p className="description-one">{product?.description}</p>
                                <button className="btn btn-primary form-control">
                                Añadir al carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}