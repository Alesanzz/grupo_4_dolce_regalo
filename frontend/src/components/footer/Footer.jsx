
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/mastercard.png';
import marcadopago from '../../assets/images/mercadopago.png';
import "./footer.css"
import { BannerEmail } from '../banner-email/BannerEmail';

export const Footer = () => {
    return (
        <>
        <BannerEmail/>
            <div className="container-footer">
                <div className="row">
                    <div className="col-md-4">
                        <p className='titulos'>Medios de Pago</p>
                        <div className="row">   
                            <div className="col-md-4 pago">
                                <img src={visa} alt="" />
                            </div>
                            <div className="col-md-4 pago">
                                <img src={mastercard} alt="" />
                            </div>
                            <div className="col-md-4 pago">
                                <img src={marcadopago} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className='titulos'>Medio De Envios</p>
                        <div className="row">
                            <div className="col-md-4 envios">
                            <i class="fa-solid fa-cart-flatbed"></i>
                            </div>
                            <div className="col-md-4 envios">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className='titulos'>Nuestras redes sociales</p>
                        <div className="row">
                            <div className="col-md-4 redes">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="col-md-4 redes">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="col-md-4 redes">
                                <i className="fa-brands fa-tiktok"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 info-footer">
                        <p>Contacto</p>
                        <p>dolceregalo@gamil.com</p>
                        <p>dolceregalo@gamil.com</p>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p> Copyright © dolceregalo.arg</p>
            </div>
        </>
    )
}