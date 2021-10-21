
import React from "react";
import '../App.css';
import map from '../assets/map.jpeg'


//Remplacer Test par le nom de votre fonction

function Map() {

    
    return(
        <>
        <div>
            <div className="bandeauHeader">
            <h1 className="bandeauH1">Des données à travers le monde</h1>
            <svg classNamme="bandeauSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                <circle  fill="#D7B899" cx="0" cy="100" r="100" />
                <circle fill="#D7B899" cx="200" cy="100" r="100" />
            </svg>
            </div>          
        </div>

    <div className="backgroundImage">
        <img id='hero' src={map} alt="map"/>
        
    </div>

        </>
    )
}

export default Map;