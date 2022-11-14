import "./banner-email.css"

export const BannerEmail = () => {
    return(
        <>
            <div className="container-banner">
                <div className="row">
                    <div className="col-md-4 col-sm-12 info-banner">
                        <p>Dejanos tu email para recibir novedades</p>
                    </div>
                    <div className="col-md-4  col-sm-12 info-banner">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-md-4 col-sm-12 info-banner">
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}