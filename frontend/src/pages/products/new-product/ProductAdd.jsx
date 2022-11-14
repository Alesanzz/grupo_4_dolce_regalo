import "./product-add.css"
import formProduct from "../../../utils/dataFormProduct.json"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CategoryAll, SeasonAll } from "../../../core/services/CategorySeasonService";
import { useEffect } from "react";
import { ProductCreate } from "../../../core/services/ProductsService";
import { responseSucces } from "../../../utils/alerts";
export const ProductAdd = () => {
    let dataProduct = formProduct.formProduct;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [categories, setCategories] = useState([]);
    const [season, setSeason] = useState([]);

    const procesoFormulario =  async (data) => {
        let token = localStorage.getItem('token');
        let response = await ProductCreate(data, token);
        if(response.data.response){
            responseSucces(response.data.message)
            reset()
        }
    }

    useEffect(() => {
        getAllCategory()
        getAllSeason()
    }, [])

    const getAllCategory = async () => {
        let token = localStorage.getItem('token');
        let response = await CategoryAll(token);
        console.log(response);
        if (response.data.response) {
            setCategories(response.data.categories)
            console.log(categories);
        }
    }
    const getAllSeason = async () => {
        let token = localStorage.getItem('token');
        let response = await SeasonAll(token);
        if (response.data.response) {
            setSeason(response.data.season)
            console.log(season);
        }
    }

    const clearForm = () => {
        reset()
    }


    return (
        <>
            <main className="product-add">
                <h2>Crear Nuevo Producto</h2>
                <form onSubmit={handleSubmit(procesoFormulario)}>
                    <div className="container">
                        {
                            dataProduct.map((value, i) => {
                                return (
                                    <>
                                        <section className={value.name.className}>
                                            <label for={value.name.for}>{value.name.label}</label>
                                            <input type={value.name.type}
                                                {...register(value.name.register, value.name.validations)}
                                                name={value.name.name} id={value.name.id} />
                                            <span id="nameSpan"></span>
                                        </section>
                                        <section className={value.price.className}>
                                            <label for={value.price.for}>{value.price.label}</label>
                                            <input type={value.price.type}
                                                {...register(value.price.register, value.price.validations)}
                                                name={value.price.name} id={value.price.id} />
                                            <span id="nameSpan"></span>
                                        </section>
                                        <section className={value.category.className}>
                                            <label for={value.category.for}>{value.category.label}</label>
                                            <select
                                                {...register(value.category.register, value.category.validations)}
                                                name={value.category.name} id={value.category.id} >
                                                <option value="">{value.category.optionDefault}</option>
                                                {
                                                    categories.map((category) => {
                                                        return (
                                                            <>
                                                                <option value={category.sku}>{category.name}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <span id="nameSpan"></span>
                                        </section>
                                        <section className={value.season.className}>
                                            <label for={value.season.for}>{value.season.label}</label>
                                            <select
                                                {...register(value.season.register, value.season.validations)}
                                                name={value.season.name} id={value.season.id} >
                                                <option value="">{value.season.optionDefault}</option>
                                                {
                                                    season.map((seasone) => {
                                                        return (
                                                            <>
                                                                <option value={seasone.sku}>{seasone.name}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <span id="nameSpan"></span>
                                        </section>
                                        <section className={value.description.className}>
                                            <label for={value.description.for}>{value.description.label}</label>
                                            <textarea
                                                {...register(value.description.register, value.description.validations)}
                                                name={value.description.name} id={value.description.id} > </textarea>
                                            <span id="nameSpan"></span>
                                        </section>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="btn-add-product">
                        <button type="submit" className="btn btn-success form-control">
                            Crear Producto
                        </button>
                        <button onClick={()=> clearForm()} type="button" className="btn btn-primary form-control">
                            Limpiar
                        </button>
                    </div>
                </form>
            </main>
        </>
    )
}