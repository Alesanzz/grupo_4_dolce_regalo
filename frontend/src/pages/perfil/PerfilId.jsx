import "./perfil.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listUserById, updateUserById } from "../../core/services/ProfileService";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { responseSucces } from "../../utils/alerts";
export const PerfilId = () => {
    let navigate = useNavigate()
    const { id } = useParams();
    const [userId, setUserId] = useState({})
    const { register, handleSubmit, setValue  ,formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            pais: ''
          }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function axiosUserId() {
            try {
                let token = localStorage.getItem('token')
                let response = await listUserById(id, token);
                if(response.data.response){
                    setUserId(response.data.userId);
                }
            } catch (e) {
                console.error(e);
            }
        };
        axiosUserId()
    }, [])


    const procesoFormulario = (data) =>{
        console.log(data);
        Swal.fire({
            title: 'Usuario seguro desea actualizar los datos?',
            icon: 'info',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((response)=> {
            if(response.isConfirmed){
                updateUserData(data)
            }else{
                alert('denegado....')
            }
        })
    }

    const updateUserData = async (data) =>{
        let token = localStorage.getItem('token')
        let response = await updateUserById(id,data,token);
        if(response.data.response){
            responseSucces(response.data.message);
            localStorage.setItem('user', JSON.stringify(response.data.newUser))
            navigate("/perfil")
        }
    }
    setValue('name', userId.name)
    setValue('lastname', userId.lastname)
    setValue('email', userId.email)
    setValue('phone', userId.phone)
    setValue('pais', userId.country)
    return (
        <>
            <main className="main-perfil">
                <h2>Actualizar Perfil</h2>
                <div className="containers">
                <form onSubmit={handleSubmit(procesoFormulario)}>
                <div className="row">
                        <div className="col-md-8">
                            <div className="card info-perfil">
                                <div className="input-group">
                                    <span className="input-group-text">Nombre</span>
                                    <input type="text" 
                                    {...register('name')}
                                    aria-label="First name"  className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Apellido</span>
                                    <input type="text" defaultValue={userId.lastname}
                                    {...register('lastname')}
                                    aria-label="First name"  className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Email</span>
                                    <input type="text" defaultValue={userId.email} 
                                    {...register('email')}
                                    aria-label="First name"  className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Celular</span>
                                    <input type="number" defaultValue={userId.phone}
                                    {...register('phone')}
                                    aria-label="First name"  className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Pais</span>
                                    <select defaultValue={userId.country} className="form-control"
                                    {...register('pais')}
                                     id="pais">
                                        <option value={userId.country}>{userId.country}</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="mexico">Mexico</option>
                                    </select>
                                </div>
                                <button  className="btn btn-primary">Actualizar</button>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </main>
        </>
    )
}