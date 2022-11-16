import { CountCategories } from "./CountCategories"
import { CountProducts } from "./CountProducts"
import { CountSeason } from "./CountSeason"
import { CountUsers } from "./CountUsers"
import "./dasboard.css"
export const Dasboard = () => {
    return(
        <>
            <div className="container-dasboard">
                <div className="row row-dasboard">
                <h1>Dasboard</h1>
                    <div className="col-md-3 col-sm-12 ">
                        <div className="card card-dasboard">
                            <p>Cantidad de Usuarios</p>
                            <CountUsers/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card card-dasboard">
                            <p>Cantidad de Productos</p>
                            <CountProducts/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card card-dasboard">
                            <p>Numero de Categorias</p>
                            <CountCategories/>
                            
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card card-dasboard">
                            <p>Numero de Temporadas</p>
                            <CountSeason/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}