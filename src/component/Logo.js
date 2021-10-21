import React from 'react'
import '../App.css'
import useModal from './useModal'
import Contact from './Contact'

export default function Logo() {

    const {isShowing, toggle} = useModal();
    return (
        <>
        
        <div className="logoContainer">

        <div className="modal-toggle">
            <button onClick={toggle}>Contact</button>

            <Contact isShowing={isShowing} hide={toggle} />
        </div>
            <h1>World</h1>
            <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png" alt="logo"/>
            <h1>Company</h1>
            
        </div>

       

        </>
    )
}
