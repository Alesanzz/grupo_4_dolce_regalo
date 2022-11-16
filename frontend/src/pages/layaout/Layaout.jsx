import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { IconWhassapp } from "../../components/icon-whassapp/IconWhassapp";
export const Layaout = () => {
    return (
        <>

            <Header />
            <Outlet />
            <Footer />
            <IconWhassapp />
        </>
    )
}