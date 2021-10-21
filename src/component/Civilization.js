import React from 'react';
import CivilizationList from './CivilizationList'

const Civilization = (props) => {

    const {item} = props;


    return (
        <div>
            
        <div className="infoCenter">
            
            <div className="infoHeader">

                <img src={item.img_url} alt="blason"/>
                <h2>{item.name}</h2>
            
            </div>
            <div className="infoBlock">

                <div className="blockLeft">
                <p>Population: {item.population}</p>
                <p>Monnaie: {item.currency}</p>
                <p>Type d'armée: {item.army_type}</p>
                </div>

                <div className="blockRight">
                <p>Unité d'élite: {item.unique_unit}</p>
                <p>Meilleure techno: {item.unique_tech}</p>
                <p>Point fort: {item.team_bonus}</p>
                </div>
                

            </div>

                    <p id='battleScore'>Battle Score: {item.battlescore}</p>
                <div className="infoSpec">            
                    <ul> Spécificités : </ul>

                    {item.civilization_bonus.map((bonus) => {
                
                
                return (
                    <li>{bonus}</li>
        )       
        })}
                </div>

            
        </div>
        </div>
    );
};

export default Civilization;