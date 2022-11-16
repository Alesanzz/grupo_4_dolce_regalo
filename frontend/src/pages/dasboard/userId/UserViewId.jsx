import { DialogContent } from "@mui/material"
import { useEffect, useState } from "react";
import { listUserById } from "../../../core/services/ProfileService";
import "./userid-view.css"
export const UserViewId = (props) => {
    const [userid, setUserId] = useState({});

    const getUserId = async () => {
        let token = localStorage.getItem('token');
        let response = await listUserById(props.sku, token);
        console.log(response);
        if (response.data.response) {
            setUserId(response.data.userId)
        }
    }
    useEffect(()=> {
        getUserId()
    },[])
    return (
        <>
            <div className="row container-userid">
                <div className="icon-close">
                    <svg onClick={props.onClose} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                </div>
                <div className="col-md-6">
                    <DialogContent>
                        <figure>
                            <img className="imagen-view-userid" src={`${process.env.REACT_APP_PATH}images/users/${userid?.avatar}`} alt="" />
                        </figure>
                    </DialogContent>
                </div>
                <div className="col-md-6">
                    <DialogContent>
                        <div className="content-info-userid">
                            <p className="title-user">{userid?.name} {userid?.lastname}</p>
                            <p className="texto-info">Email: <span className="texto-data">  {userid?.email} </span> </p>
                            <p className="texto-info">Pais: <span className="texto-data">  {userid?.country} </span> </p>
                            <p className="texto-info">Celular: <span className="texto-data">  {userid?.phone} </span> </p>
                            <p className="texto-info">Rol: <span className="texto-data">  {(userid?.admin) ? 'Administrador': 'Usuario'} </span> </p>
                        </div>
                    </DialogContent>
                </div>
            </div>
        </>
    )
}