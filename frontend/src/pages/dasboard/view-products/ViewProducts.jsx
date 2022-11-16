
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductsAll } from "../../../core/services/ProductsService";
import "./view-products.css"
export const ViewProducts = () => {
    const [productsView, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const [count, setCount] = useState(0);
    
    const onPageChange = (event, p) => {
        setPage(parseInt(p) - 1);
        getProductsAll(parseInt(p) - 1)
    }
    const getProductsAll = async (page) => {
        try {
            let token = localStorage.getItem('token');
            let response = await ProductsAll(size, page, token);
            if (response.data.response) {
                setCount(response.data.products.count)
                setProducts(response.data.products.rows)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const viewProduct = (sku) => {

    }
    useEffect(() => {
        getProductsAll(page);
    }, [])
    return (
        <>
            <div className="row main-view-products">
                <h2 className="title-main-view-products">Productos</h2>
                {
                    productsView.map((value, i) => {
                        return (
                            <>
                                <div key={value.sku} className="col-md-3 mb-5 ">
                                    <div key={value.sku} className="card p-2 card-products-dasboard" onClick={() => viewProduct(value.sku)}>
                                        <figure className="img-product">
                                            <img src={`${process.env.REACT_APP_PATH}images/products/${value.image}`} alt="" />
                                        </figure>
                                        <div className="info-product">
                                            <h1>{value.name}</h1>
                                            <p>Precio: ${value.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="pagination">
                    <Pagination count={count} onChange={onPageChange} color="primary" />
            </div>
        </>
    )
}