import React, { useState, useEffect } from 'react';
import { civNewData } from '../data/civNewData';
import Civilization from './Civilization';

const CivilizationList = () => {

    const [civilizations] = useState(civNewData);
    
    const [selectedOption, setSelectedOption] = useState("Aztecs");
    
    const handleOption = (event) => {
        let option = event.target.value;
        setSelectedOption(option);
    }

    const [dataCiv, setDataCiv] = useState(null);
    /* useEffect(()=> {
        fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/4")
        .then  ((resp)=> resp.json())
        .then ((data) => setDataCiv(data))
    }, [])  */
    
    return (
        <div>
            <div>
            <div className="bandeauHeader">
            <h1 className="bandeauH1">Votre <strike>cible</strike> 🤭 recherche</h1>
            <svg classNamme="bandeauSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                <circle  fill="#D7B899" cx="0" cy="100" r="100" />
                <circle fill="#D7B899" cx="200" cy="100" r="100" />
            </svg>
            </div>          
        </div>
        
        <div className="infoContent">
            <select className="select" value={selectedOption} onChange={handleOption}>
                <option>Aztecs</option>
                <option>Britons</option>
                <option>Byzantines</option>
                <option>Celts</option>
                <option>Chinese</option>
                <option>Franks</option>
                <option>Goths</option>
                

            </select>

            {
                dataCiv != null &&
                <>
                <h2>{dataCiv.name}</h2>
                <p>{dataCiv.civilization_bonus}</p>
                </>
            }
            
            <div>
            {
                    civilizations
                    
                   
                    .filter((item) => 
                        item.name.includes (selectedOption)) 
            
                    .map((item) => {
                        
                        
                        return (
                            <Civilization

                                key={item.id} 
                                item={item}
                            />       
                        )

                    })

                }
            </div>
            
        </div>
        </div>
    );
};

export default CivilizationList;