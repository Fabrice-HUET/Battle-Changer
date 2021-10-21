/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../App.css'



function Footer() {
    return(
    <>
    <div className="footerMain">
        <div className="footerContainer">
            <div className="footerRow">
                {/*colonne1*/}
                <div className="col">
                    <h3 className="h3Footer"> Où Nous trouver ?</h3>
                    <ul className="footerList">
                        <li>World Company</li>
                        <li>Partout dans le monde</li>
                        <li>Nous sommes le Monde</li>
                    </ul>
                </div>
                {/*colonne2*/}
                <div className="col">
                    <h3 className="h3Footer">Créé par</h3>
                    <ul className="footerList">
                        <li>Fabrice HUET</li>
                        <li>Jefferson GUEGAN</li>
                        <li>Maxime KIRCH</li>
                    </ul>
                </div>
                {/*colonne3*/}
                <div className="col">
                <h3 className="h3Footer">Sur les routes</h3>
                    <ul className="footerList">
                        <li> Hanséatiques</li>
                        <li> Vénitiennes</li>
                        <li> Génoises</li>
                        </ul>
                </div>    
            </div>
                     
        </div>
        <hr className="hrFooter"></hr>
        <div className="footerNoRow">
            <p className="lastFooter">
            &copy;{new Date().getFullYear()} WORLD COMPANY INC</p>
            <p className="lastFooter">
            <a href="#">Engagement de confidentialité</a> | <a href="#">Utilisation des cookies</a> | <a href="#">Conditions d’utilisation</a> | <a href="#">Mentions légales</a> | <a href="#">Plan du site</a>
            </p>   
            </div> 
    </div>
        


</>
    )
}

export default Footer