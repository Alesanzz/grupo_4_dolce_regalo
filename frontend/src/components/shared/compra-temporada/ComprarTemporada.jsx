import padre from '../../../assets/images/banner-dia-del-padre.jpg';
import madre from '../../../assets/images/banner-dia-de-la-madre.jpg';
import otras from '../../../assets/images/banner-otras-temporadas.jpg';
import "./comprar-temporada.css"
export const ComprarTemporada = () =>{
    return(
        <>
            <div className="container-comprartemporadd">
                <figure>
                    <img src={madre} alt="" />
                </figure>
                <figure>
                    <img src={padre}alt="" />
                </figure>
                <figure>
                    <img src={otras}alt="" />
                </figure>
            </div>
        </>
    )
}