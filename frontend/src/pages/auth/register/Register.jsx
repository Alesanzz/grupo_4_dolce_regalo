import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import "./register.css";
import axios from "axios"
import { useForm } from 'react-hook-form'
import formRegister from '../../../utils/dataFormRegister.json'
import { useEffect } from "react";
import { CreateUser, listUser } from "../../../core/services/UserService";
import { responseSucces } from "../../../utils/alerts";
export const Register = () => {
    const [redirect, setRedirect] = useState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( ()=> {
        (async function() {
            try {
                let response = await listUser();
                console.log(response);
            } catch (e) {
                console.error(e);
            }
        })();
    },[])



    const forms = formRegister.formRegister;
    const { register, handleSubmit, formState: { errors }, reset  } = useForm();

    const procesarFormulario = async (data) => {
        try {
            let createResponse = await CreateUser(data)
            console.log(createResponse)
            if(createResponse.data.response){
                console.log(createResponse)
                responseSucces(createResponse.data.message);
                setRedirect(true)
                reset()
            }else{
                console.log(createResponse)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        
        <>
  
                
            <main className="main-register">
                <h2>Crear cuenta</h2>
                <div className="container">
                    <form onSubmit={handleSubmit(procesarFormulario)}>
                        {
                            forms.map((value, i) => {
                                return (
                                    <>
                                        <section className={value.name.className}>
                                            <label for={value.name.for}>{value.name.label}</label>
                                            <input type={value.name.type}
                                                {...register(value.name.register, value.name.validations)}
                                                name={value.name.name} id={value.name.id} />
                                            {
                                                (errors.name?.message) && <p className="alert alert-danger" role="alert">{errors.name?.message}</p>
                                            }
                                            
                                            <span id="nameSpan"></span>
                                        </section>
                                        <section className={value.lastName.className}>
                                            <label for={value.lastName.for}>{value.lastName.label}</label>
                                            <input type={value.lastName.type}
                                                {...register(value.lastName.register, value.lastName.validations)}
                                                name={value.lastName.name} id={value.lastName.id} />
                                            {
                                                (errors.lastName?.message) && <p className="alert alert-danger" role="alert">{errors.lastName?.message}</p>
                                            }
                                            <span id="lastNameSpan"></span>
                                        </section>
                                        <section className={value.phone.className}>
                                            <label for={value.phone.for}>{value.phone.label}</label>
                                            <input type={value.phone.type}
                                                {...register(value.phone.register, value.phone.validations)}
                                                name={value.phone.name} id={value.phone.id} />
                                            {
                                                (errors.phone?.message) && <p className="alert alert-danger" role="alert">{errors.phone?.message}</p>
                                            }
                                            <span id="phoneSpan"></span>
                                        </section>
                                        <section className={value.pais.className}>
                                            <label for={value.pais.for}>{value.pais.label}</label>
                                            <select name={value.pais.name}
                                                {...register(value.pais.register, value.pais.validations)}
                                                id={value.pais.id}>
                                                {
                                                    value.pais.options.map((response) => {
                                                        return (
                                                            <>
                                                                <option value={response.value} >{response.name}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                            {
                                                (errors.pais?.message) && <p className="alert alert-danger" role="alert">{errors.pais?.message}</p>
                                            }
                                            <span id="countrySpan"></span>
                                        </section>
                                        <section className={value.email.className}>
                                            <label for={value.email.for}>{value.email.label}</label>
                                            <input type={value.email.type}
                                                {...register(value.email.register, value.email.validations)}
                                                name={value.email.name} id={value.email.id} />
                                            {
                                                (errors.email?.message) && <p className="alert alert-danger" role="alert">{errors.email?.message}</p>
                                            }
                                            <span id="emailSpan"></span>
                                        </section>
                                        <section className={value.password.className}>
                                            <label for={value.password.for}>{value.password.label}</label>
                                            <input type={value.password.type}
                                            {...register(value.password.register, value.password.validations)}
                                            name={value.password.name} id={value.password.id} />
                                            {
                                                (errors.password?.message) && <p className="alert alert-danger" role="alert">{errors.password?.message}</p>
                                            }
                                            <span id="passwordSpan"></span>
                                        </section>
                                        <section className={value.passwordCheck.className}>
                                            <label for={value.passwordCheck.for}>{value.passwordCheck.label}</label>
                                            <input type={value.passwordCheck.type}
                                            {...register(value.passwordCheck.register, value.passwordCheck.validations)}
                                            name={value.passwordCheck.name} id={value.passwordCheck.id} />
                                            {
                                                (errors.passwordCheck?.message) && <p className="alert alert-danger" role="alert">{errors.passwordCheck?.message}</p>
                                            }
                                            <span id="passwordSpan"></span>
                                        </section>
                                    </>
                                )
                            })
                        }

                        <section className="botones">
                            <button type="submit">
                                Registrarse
                            </button>
                            <button type="button">
                                <Link to="/login" className="btn-login-register" href="/login">Iniciar sesion</Link>
                            </button>
                        </section>
                    </form>
                </div>
            </main>

        </>
    )
}