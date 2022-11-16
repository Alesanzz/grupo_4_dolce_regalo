import { useEffect } from 'react';
import { useState } from 'react';
import {  Route, Routes, useRoutes } from 'react-router-dom';

import { Login } from '../pages/auth/login/Login';
import { Register } from '../pages/auth/register/Register';
import { Categories } from '../pages/categories/Categories';
import { Contacto } from '../pages/contacto/Contacto';
import { Dasboard } from '../pages/dasboard/Dasboard';
import { Error404 } from '../pages/error/Error404';
import { Home } from '../pages/home/Home';
import { Informacion } from '../pages/infromacion/Informacion';
import { Layaout } from '../pages/layaout/Layaout';
import { Perfil } from '../pages/perfil/Perfil';
import { PerfilId } from '../pages/perfil/PerfilId';
import { ProductAdd } from '../pages/products/new-product/ProductAdd';
import { ProductsId } from '../pages/products/ProductId';
import { Products } from '../pages/products/Products';

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
    const routes = useRoutes([
      {
        path: "/" , 
        element: <Layaout/> , 
        children: [
          {path: "/" , element: <Home/>, index: true},
          {path: "/informacion" , element: <Informacion/>},
          {path: "/productos" , element: <Products/>},
          {path: "/productos/:sku" , element: <ProductsId/>},
          {path: "/categoria/:skucategory" , element: <Categories/>},
          {path: "/nuevo-producto" , element: <ProductAdd/>},
          {path: "/contacto" , element: <Contacto/>},
          {path: "/perfil" , element: (logged) ? <Perfil/> : <Home/>},
          {path: "/perfil/:id" , element: (logged) ? <PerfilId/> : <Home/>},
          {path: "/login" , element: <Login/>},
          {path: "/register" , element: <Register/>},
        ] 
      },
      {path :"/dasboard" , element:<Dasboard/>},
      {path :"*" , element:<Error404/>},
    ])
    return routes
    
}