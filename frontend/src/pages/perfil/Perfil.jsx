import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "./perfil.css"
export const Perfil = () => {
    let navigate = useNavigate();
    let [user, setUser] = useState({})
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []);

    const updateUser = (id) =>{
        navigate(`/perfil/${id}`);
    }

    return (
        <>
            <main className="main-perfil">
                <h2>Perfil</h2>
                <div className="containers">
                    <div className="row">
                        <div className="col-md-4">
                            <figure className="figure-perfil">
                            <img className="avatar-perfil" src={`images/users/${user.avatar}`} alt="" />
                            </figure>
                        </div>
                        <div className="col-md-8">
                            <div className="card info-perfil">
                                <p>Nombre: <span className="span">{user.name} {user.lastname?.toLowerCase()}</span></p>
                                <p>Email: <span className="span">{user.email}</span></p>
                                <p>Celular: <span className="span">{user.phone}</span></p>
                                <p>Pais: <span className="span">{user.country}</span></p>
                                <p>
                                    Rol: <span>
                                        {
                                            (user.admin) ? <span className="span">Aministrador</span> : <span className="span">Usuario</span>
                                        }
                                    </span>
                                </p>
                                <button className="btn btn-primary"  onClick={()=> updateUser(user.sku)}>Actualizar datos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}