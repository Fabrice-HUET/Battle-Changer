import React, { useEffect, useState } from 'react';
import CivilizationList from './CivilizationList';


const InfoCiv = () => {

    const [dataCiv, setDataCiv] = useState(null);
    useEffect(()=> {
        fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/4",
        {mode: 'cors',})
        .then  ((resp)=> resp.json())
        .then ((data) => setDataCiv(data))
    }, [])

    return (
        <div>
            <select>
                <option value="Aztecs">Aztecs</option>
                <option value="Britons">Britons</option>
                <option>Byzantines</option>
                <option>Celts</option>
                <option>Chinese</option>
                <option>Franks</option>
                <option>Goths</option>
                <option>Huns</option>
                <option>Japanese</option>
                <option>Koreans</option>
                <option>Mayans</option>
                <option>Mongols</option>
                <option>Persians</option>
                <option>Saracens</option>
                <option>Spanish</option>
                <option>Teutons</option>
                <option>Turks</option>
                <option>Vikings</option>
                <option>Berbers</option>
                <option>Burmese</option>
                <option>Ethiopians</option>
                <option>Incas</option>
                <option>Indians</option>
                <option>Italians</option>
                <option>Khmer</option>
                <option>Magyars</option>
                <option>Malians</option>
                <option>Portuguese</option>
                <option>Slavs</option>
                <option>Vietnamese</option>
            </select>
            {
                dataCiv != null &&
                <>
                <h2>{dataCiv.name}</h2>
                <p>{dataCiv.civilization_bonus}</p>
                </>
            }

            <CivilizationList/>
        </div>
    );
};

export default InfoCiv;