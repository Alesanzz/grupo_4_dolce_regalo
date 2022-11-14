import "./carousel.css";
import carousel from "../../utils/data-carousel.json"
export const Carousel = () => {
    let data = carousel.carousel;
    console.log(data);
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide mt-3" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                {
                    data.map((value, i) => {
                        return(
                        <div className={value.className} data-bs-interval="2000" key={i+1}>
                            <img height={400} width={200} src={value.imagen} className="d-block w-100" alt={value.title}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{value.title}</h5>
                                <p>{value.descripcion}</p>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}