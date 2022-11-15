import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CategoryById } from "../../core/services/CategorySeasonService";
import { ProductsAll, ProductsAlls } from "../../core/services/ProductsService";
import './categories.css'
export const Categories = () => {
    const param = useParams();
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);
    const getCategoryId = async () => {
        try {
            let token = localStorage.getItem('token');
            let response = await CategoryById(param.skucategory, token);
            if (response.data.response) {
                setCategory(response.data.category)
                getAllProducts(response.data.category.sku)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getAllProducts = async (sku) => {
        try {
            console.log(sku);
            let token = localStorage.getItem('token');
            let response = await ProductsAlls(token);
            console.log(response);
            if(response.data.response){
                let products = response.data.products;
             let productC =   products.filter(product => product.category_sku === sku);
                console.log(productC);
                setProducts(productC)
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getCategoryId()
    }, [])
    return (
        <>
            <div className="container-category">
                <h2 className="title-categorie">{category.name}</h2>
                <div className="row">
                    {
                        products.map((value, i) => {
                            return (
                                <>
                                    <div key={value.sku} className="col-md-3 mb-5 ">
                                        <div key={value.sku} className="card p-2 card-products">
                                            <figure className="img-product">
                                                <img src={`/images/products/${value.image}`} alt="" />
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
            </div>
        </>
    )
}