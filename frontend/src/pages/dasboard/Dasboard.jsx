import { useNavigate } from "react-router-dom"
import { CountCategories } from "./CountCategories"
import { CountProducts } from "./CountProducts"
import { CountSeason } from "./CountSeason"
import { CountUsers } from "./CountUsers"
import "./dasboard.css"
import { ViewProducts } from "./view-products/ViewProducts"
import { ViewUsers } from "./view-users/ViewUsers"
export const Dasboard = () => {
    const navigate = useNavigate()
    const exitDasboard = () => {
        navigate('/')
    }
    return (
        <>
            <div className="container-dasboard">
                <div className="row row-dasboard">
                <div className="icon-leave">
                    <svg onClick={exitDasboard} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                </div>
                    <h1>Dasboard</h1>
                    <div className="col-md-3 col-sm-12 ">
                        <div className="card card-dasboard">
                            <p>Cantidad de Usuarios</p>
                            <CountUsers />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card card-dasboard">
                            <p>Cantidad de Productos</p>
                            <CountProducts />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card card-dasboard">
                            <p>Numero de Categorias</p>
                            <CountCategories />

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card card-dasboard">
                            <p>Numero de Temporadas</p>
                            <CountSeason />
                        </div>
                    </div>
                    <ViewProducts />
                    <ViewUsers />
                </div>
            </div>
        </>
    )
}