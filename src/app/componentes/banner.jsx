import React from 'react';
import './styles.css';


function Banner() {

    return <div id="carouselExampleFade" className="carousel slide carousel-fade banner" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../img/UniToledo.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="../img/Banner-site-desk_.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="../img/BannerToledo.jpg" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

}
export default Banner