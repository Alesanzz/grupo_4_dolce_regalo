
import { Dialog, DialogTitle, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components/modal/Modal";
import { ProductsAll } from "../../../core/services/ProductsService";
import { ProductViewId } from "../productId/ProductViewId";
import "./view-products.css"
export const ViewProducts = () => {
    const navigate = useNavigate()
    const [productsView, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const [sku, setSku] = useState(null);
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
        setOpen(true)
        setSku(sku)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const addProduct = () => {
        navigate('/dasboard/nuevo-producto', {dasboard: true})
    }
    useEffect(() => {
        getProductsAll(page);
    }, [])
    return (
        <>
            <div className="row main-view-products">
                <h2 className="title-main-view-products">Productos</h2>
                <div className="button-add-product">
                    <button onClick={addProduct} className="btn btn-success">Crear Producto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg></button>
                </div>
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
            <div className="modal">
                <Dialog
                    open={open}
                    maxWidth="lg"
                    classes={'style-dialog'}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <ProductViewId sku={sku} onClose={handleClose} />
                </Dialog>
            </div>
        </>
    )
}