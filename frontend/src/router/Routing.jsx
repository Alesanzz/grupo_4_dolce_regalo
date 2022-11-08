import { useEffect } from 'react';
import { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Login } from '../pages/auth/login/Login';
import { Register } from '../pages/auth/register/Register';
import { Contacto } from '../pages/contacto/Contacto';
import { Home } from '../pages/home/Home';
import { Informacion } from '../pages/infromacion/Informacion';
import { Perfil } from '../pages/perfil/Perfil';

export const Routing = () => {
    const [logged , setLogged ] = useState(false);
    useEffect(()=> {
      console.log('rutas hola');
      if(localStorage.getItem('token') !== null){
        setLogged(true)
      }else{
        setLogged(false)
      }
    },[])

    return(
        <>
          <Routes>
            <Route path="/" element={<Home/>} index />
            <Route path="/informacion" element={<Informacion/>}  />
            <Route path="/contacto" element={<Contacto/>}  />
            <Route path='/perfil' element={ (logged) ? <Perfil/> : <Home/>}  />
            <Route path="/login" element={<Login/>}  />
            <Route path="/register" element={<Register/>}  />
            {/* <Route path="/personajes"  element={<GifHook/>}/>
            <Route path='*' element={<Error404/>}/> */}
          </Routes>
        </>
    )
}