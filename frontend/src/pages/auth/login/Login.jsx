import { Link, useNavigate } from "react-router-dom"
import "./login.css";
import { useForm } from 'react-hook-form'
import formLogin from '../../../utils/dataFormLogin.json'
import { LoginUser } from "../../../core/services/UserService";
import { responseError } from "../../../utils/alerts";
import { useState } from "react";
import { Loader } from "../../../components/loader/Loader";
export const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const forms = formLogin.formLogin;
    console.log(forms);
    const procesarFormulario = async (data) => {
        try {
            let response = await LoginUser(data)
            if (response.data.response) {
                setLoading(response.data.response)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                navigate("/");
                window.location.reload()
                console.log(response);
            }
        } catch (error) {
            if (error.response.data?.errors?.email) {
                let message = error.response.data.errors.email.msg
                responseError(message);
                return;
            }
            if (error.response.data?.errors?.password) {
                let message = error.response.data.errors.password.msg
                responseError(message);
                return;
            }
            if (error.response.data?.message !== "") {
                let message = error.response?.data?.message
                responseError(message);
                return;
            }
            console.log(error.response.data.response);
            console.log(error);
        }
    }

    return (
        <>
            <Loader isLoading={loading}/>
            <main className="main-login">
                <h2>Inicio de sesión</h2>
                <div className="container">

                    <form onSubmit={handleSubmit(procesarFormulario)}>

                        {
                            forms.map((value, i) => {
                                return (
                                    <>
                                        <section className={value.email.className}>
                                            <label for={value.email.for}>
                                                <i className="fa-solid fa-user">{value.email.label}</i>
                                            </label>
                                            <input type={value.email.type}
                                                {...register(value.email.register, value.email.validations)}
                                                name={value.email.name} id={value.email.id} className="email-save" />
                                            {
                                                (errors.email?.message) && <p className="alert alert-danger" role="alert">{errors.email?.message}</p>
                                            }
                                            <span id="emailSpan"></span>
                                        </section>
                                        <section className={value.password.className}>
                                            <label for={value.password.for}>
                                                <i className="fa-solid fa-key">{value.password.label}</i>
                                            </label>
                                            <input type={value.password.type}
                                                {...register(value.password.register, value.password.validations)}
                                                name={value.password.name} id={value.password.id} />
                                            {
                                                (errors.password?.message) && <p className="alert alert-danger" role="alert">{errors.password?.message}</p>
                                            }
                                            <span id="passwordSpan"></span>

                                        </section>
                                    </>
                                )
                            })
                        }
                        <section className="remember-user">
                            <p>Recordar el usuario</p>
                            <input type="checkbox" name="" id="remember-user" />
                        </section>
                        <section className="olvido-clave">
                            <p>¿Olvidaste tu contraseña?</p>
                        </section>
                        <section className="botones">
                            <button type="submit">
                                Ingresar
                            </button>
                            <button type="button">
                                <Link to="/register" className="btn-login-register" href="/register">Registrarse</Link>
                            </button>
                        </section>
                    </form>

                </div>
            </main>
        </>
    )
}