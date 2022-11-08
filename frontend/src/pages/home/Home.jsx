import { Carousel } from "../../components/carousel/Carousel"
import { CompraCategorias } from "../../components/shared/compra-categorias/CompraCategorias"
import { ComprarTemporada } from "../../components/shared/compra-temporada/ComprarTemporada"
import "./home.css"

export const Home = () => {
    return (
        <>
            <div className="containers-home">
                <div className="info">
                    <p>Hacemos tus sueños realidad</p>
                    <p>Nunca es tarde para regalar</p>
                    <button>Comprar ahora</button>
                </div>
            </div>
            <Carousel/>
            <h2>COMPRÁ POR CATEGORÍAS</h2>
            <CompraCategorias/>
            <h2>COMPRÁ POR TEMPORADA</h2>
            <ComprarTemporada/>
            <h2>VISITA NUESTRA CUENTA DE INSTAGRAM</h2>
        </>
    )
}