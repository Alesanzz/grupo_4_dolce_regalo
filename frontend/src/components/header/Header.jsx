import { Link } from "react-router-dom"
import ruta from "../../utils/rutas.json";
import logo from '../../assets/images/logo.jpg';
import Badge from '@mui/material/Badge';
import "./header.css"
import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
export const Header = () => {
    const header = ruta.rutas;
    const [anchorEl, setAnchorEl] = useState(null);
    const [isHidden, setisHidden] = useState(false);
    const [columns, setColumns] = useState({col1: '6', col2:'8', col3:'6', col4: '4'});
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setTimeout(() => {
            window.location.reload()
        }, 500);
    };
    const clickSearch = () => {
        setisHidden(!isHidden);
    }

    useEffect(()=> {
        console.log('ngOnInit');
        if(localStorage.getItem('token') === null){
            console.log('no token');
        }else{
            setColumns({col1: '4', col2:'6', col3:'8', col4: '6'})
        }
    },[])

    return (
        <>
        
            <div className="containers">
                <div className="row row-hader">
                    <div className={`col-md-${(isHidden) ? columns.col1 : columns.col2}`}>
                        <figure className="img-logo">
                            <img src={logo} alt="" />
                        </figure>
                    </div>
                    <div className={`col-md-${(isHidden) ? columns.col3 : columns.col4}`}>
                        <ul className="nav" >
                            {
                                header.map((value, i) => {
                                    let token = localStorage.getItem('token');
                                    if(value.name === 'PRODUCTOS'){
                                        value.hidden = (token !== null) ? false : true
                                    }
                                    if(value.name === 'FILTROS'){
                                        value.hidden = (token !== null) ? false : true
                                    }
                                    return (
                                        <>
                                            <Link className={`is${(!value.hidden) ? 'Show' : 'Hidden'}`} key={i+1} to={value.to}>{value.name}</Link>
                                        </>
                                    )
                                })
                            }
                            <input className={`is${(isHidden) ? 'Show' : 'Hidden'}`}  name="" placeholder="Buscar..." id="" />
                            <i onClick={clickSearch} className={`fa-solid fa-${(isHidden) ? 'xmark' : 'magnifying-glass'}`}></i>
                            <i onClick={handleClick} className="fa-solid fa-user"></i>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}>

                                <Link className={`is${(localStorage.getItem('token') === null) ? 'Show' : 'Hidden'}`} to="/login"><MenuItem onClick={handleClose}>Ingresar</MenuItem></Link>
                                <Link className={`is${(localStorage.getItem('token') === null) ? 'Show' : 'Hidden'}`} to="/register"><MenuItem onClick={handleClose}>Registarse</MenuItem></Link>
                                <Link className={`is${(localStorage.getItem('token') !== null) ? 'Show' : 'Hidden'}`} to="/perfil"><MenuItem onClick={handleClose}>Perfil</MenuItem></Link>
                                <Link className={`is${(localStorage.getItem('token') !== null) ? 'Show' : 'Hidden'}`} to="/login"><MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem></Link>
                            </Menu>
                            <Badge badgeContent={4} color="error">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Badge>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}