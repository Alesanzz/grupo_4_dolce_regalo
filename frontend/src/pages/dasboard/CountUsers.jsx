import { useEffect, useState } from "react"
import { ProductsAlls } from "../../core/services/ProductsService";
import { listUser } from "../../core/services/UserService";
import { responseError } from "../../utils/alerts";
import "./dasboard.css"

export const CountUsers = () => {
    const [usersCount, setUsersCount] = useState();
    const getCountUsers= async () => {
        try {
            let token = localStorage.getItem('token');
            let response = await listUser(token);
            console.log(response);
            if(response.data.response){
                setUsersCount(response.data.count)
            }else{
                responseError(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        getCountUsers()
    }, [])
    return(
        <>
            <p className="number-info">{usersCount}</p>
        </>
    )    
}