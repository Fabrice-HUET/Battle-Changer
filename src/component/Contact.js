import React from 'react'
import ReactDom from 'react-dom';
import '../App.css'
import Logo from './Logo';

const Contact = ({isShowing, hide}) => 
isShowing 
? ReactDom.createPortal( 
        <>
        <div className="formContainer">
            
                <form>
                <button onclick={() => hide()}> X </button>
                    <label id='contact'>Contactez-nous !</label>

                    <div className='formInfos'>
                        <label>Nom :</label>
                        <input placeholder='Richard Coeur de Lion'></input>
                        <label>Sujet :</label>
                        <input placeholder='Sujet' ></input>
                        <label>Votre message :</label>
                        <textarea placeholder='Simplement une petite suggestion...' rows="20" ></textarea>

                        <button id='formBtn' type='submit' onclick={() => alert('Merci pour votre message !')}>Envoyer</button>

                    </div>   
                </form>
        </div>
        </>,
        document.body
    )
    : null;

    export default Contact;


