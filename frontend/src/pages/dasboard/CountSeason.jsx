import { useEffect, useState } from "react"
import {  SeasonAll } from "../../core/services/CategorySeasonService";
import { responseError } from "../../utils/alerts";
import "./dasboard.css"

export const CountSeason = () => {
    const [seasonCount, setSeasonCount] = useState();
    const getCountSeason = async () => {
        try {
            let token = localStorage.getItem('token');
            let response = await SeasonAll(token);
            if(response.data.response){
                setSeasonCount(response.data.count)
            }else{
                responseError(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        getCountSeason()
    }, [])
    return(
        <>
            <p className="number-info">{seasonCount}</p>
        </>
    )    
}