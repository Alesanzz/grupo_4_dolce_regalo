import { useEffect, useState } from "react"
import { CategoryAll } from "../../core/services/CategorySeasonService";
import { responseError } from "../../utils/alerts";
import "./dasboard.css"

export const CountCategories = () => {
    const [categoriesCount, setCategoriesCount] = useState();
    const getCountCategories = async () => {
        try {
            let token = localStorage.getItem('token');
            let response = await CategoryAll(token);
            if(response.data.response){
                setCategoriesCount(response.data.count)
            }else{
                responseError(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        getCountCategories()
    }, [])
    return(
        <>
            <p className="number-info">{categoriesCount}</p>
        </>
    )    
}