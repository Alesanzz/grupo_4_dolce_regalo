import { CircularProgress } from "@mui/material";
import "./loader.css";
export const Loader = (props) => {
    console.log(props);
    return(
        <>
            <main className={`is${(props?.isLoading) ? 'ShowLoader' : 'HiddenLoader'}`}>
            <div className="container-loading">
            <CircularProgress />
            </div>
            </main>
        </>
    )
}