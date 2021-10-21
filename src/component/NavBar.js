import React from "react";
import '../App.css';
import logo from '../assets/logo.jpg'

function NavBar() {

    
    return(
        <>

        <div className='navBar'>
            <div className="navMenu">
                <img id="logo" src={logo} alt='navLogo' />
                <h1 id='title'><a href="#">BATTLE CHANGER</a></h1>
            </div>
        

        </div>

        </>
    )
}

export default NavBar;