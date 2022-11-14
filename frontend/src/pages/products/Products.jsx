import { Pagination } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsAll } from "../../core/services/ProductsService";
import "./product.css"

export const Products = () => {
    let navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        listProducts(page)
    }, [])

    const listProducts = async (page) => {
        let token = localStorage.getItem('token');
        let response = await ProductsAll(size, page, token);
        if (response.data.response) {
            setCount(response.data.products.count)
            setProducts(response.data.products.rows)
            console.log(products);
        }
    }

    const onPageChange = (event, p) => {
        setPage(parseInt(p) - 1);
        listProducts(parseInt(p) - 1)
    }
    const viewProduct = (sku) => {
        console.log(sku);
        navigate(`/productos/${sku}`)
    }

    const addProduct = () => {
        navigate('/nuevo-producto')
    }


    return (
        <>
            <div className="container-product">
                <div className="button-crear-producto m-4">
                    <button className="btn btn-success" onClick={()=> addProduct()}>
                        Crear Producto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </button>
                </div>
                <div className="row">
                    {
                        products.map((value, i) => {
                            return (
                                <>
                                    <div key={value.sku} className="col-md-3 mb-5 ">
                                        <div key={value.sku} className="card p-2 card-products" onClick={()=>viewProduct(value.sku)}>
                                            <figure className="img-product">
                                                <img src={`images/products/${value.image}`} alt="" />
                                            </figure>
                                            <div className="info-product">
                                                <h1>{value.name}</h1>
                                                <p>Precio: ${value.price}</p>
                                                <button className="btn btn-primary form-control">
                                                    Añadir al carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                                    </svg>
                                                </button>
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
            </div>
        </>
    )
}