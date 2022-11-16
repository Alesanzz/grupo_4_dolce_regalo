import { Dialog, Pagination } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react"
import { UserAll } from "../../../core/services/UserService";
import { ProductViewId } from "../productId/ProductViewId";
import { UserViewId } from "../userId/UserViewId";
import "./view-users.css"
export const ViewUsers = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const [sku, setSku] = useState(null);
    const onPageChange = (event, p) => {
        setPage(parseInt(p) - 1);
        getAllUsers(parseInt(p) - 1)
    }
    const getAllUsers =  async (page) => {
        try {
            let token = localStorage.getItem('token');
            let response = await UserAll(size, page, token);
            console.log(response);
            if (response.data.response) {
                setCount(response.data.count)
                setUsers(response.data.users)
            }
        } catch (error) {
            
        }
    }

    const viewUser = (sku) =>{
        setOpen(true)
        setSku(sku)
    }
    const handleClose = () => {
        setOpen(false)
    }
    useEffect(()=> {
        getAllUsers(page)
    }, [])

    return (
        <>
            <div className="row main-view-users">
                <h2>Usuarios</h2>
                {
                    users.map((value, i) => {
                        return (
                            <>
                                <div key={value.sku} className="col-md-3 mb-5 ">
                                    <div key={value.sku} className="card p-2 card-products-dasboard" onClick={() => viewUser(value.sku)}>
                                        <figure className="img-product">
                                            <img src={`${process.env.REACT_APP_PATH}images/users/${value.avatar}`} alt="" />
                                        </figure>
                                        <div className="info-product">
                                            <h1>{value.name} {value.lastname}</h1>
                                            <p>{value.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="pagination">
                    <Pagination count={count} onChange={onPageChange} color="primary" />
            </div>
            <div className="modal">
                <Dialog
                    open={open}
                    maxWidth="lg"
                    classes={'style-dialog'}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <UserViewId sku={sku} onClose={handleClose} />
                </Dialog>
            </div>
        </>
    )
}