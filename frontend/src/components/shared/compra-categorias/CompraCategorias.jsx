import rosas from '../../../assets/images/cono-de-rosas.jpg';
import globos from '../../../assets/images/globos-y-chocolates.jpg';
import desayuno from '../../../assets/images/desayuno-completo.jpg';
import "./comprar-categoria.css"
export const CompraCategorias = () => {
    return (
        <>
            <div className="container-compracategoria">
                <div className="row">
                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <img src={rosas} alt="" />
                            <article class="infoBoxeCat">
                                <h3 class="tituloCat">Arreglos florales</h3>
                                <p>
                                    Variedad de tamaños, presentaciones, cantidad y flores -todos se pueden personalizar-
                                </p>
                                <a href="/">
                                    <button type="button" class="boton">Ver categoría</button></a>
                            </article>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <img src={globos} alt="" />
                            <article class="infoBoxeCat">
                                <h3 class="tituloCat">Globos y dulces</h3>
                                <p>
                                    Distintas presentaciones de bases y cajas, con una variedad ilimitada de globos y golosinas
                                </p>
                                <a href="/">
                                    <button type="button" class="boton">Ver categoría</button></a>
                            </article>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <img src={desayuno} alt="" />
                            <article class="infoBoxeCat">
                                <h3 class="tituloCat">Desayunos</h3>
                                <p>
                                    Bandeja sorpresa, diseñadas para regalar desayunos adapatables a todo tipo de gustos
                                </p>
                                <a href="/">
                                    <button type="button" class="boton">Ver categoría</button></a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}