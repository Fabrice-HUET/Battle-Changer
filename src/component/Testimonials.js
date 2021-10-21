import React from 'react'
import philippeAuguste from '../assets/philippeAuguste.jpg'
import guillaumeNormandie from '../assets/guillaumeNormandie.jpg'
import charles7 from '../assets/charles7.jpeg'
import leonidas from '../assets/leonidas.jpg'
import '../App.css'
import '../App.css'

function Testimonials() {

    return(
        <>
        <div>
            <div className="bandeauHeader">
            <h1 className="bandeauH1">Ils se sont informés</h1>
            <svg classNamme="bandeauSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                <circle  fill="#D7B899" cx="0" cy="100" r="100" />
                <circle fill="#D7B899" cx="200" cy="100" r="100" />
            </svg>
            </div>          
        </div>
                <div className='testimonialMain'>

                <div className='testimonialContainer'>
                        <p className='testimonialText'>"Grace à BattleChanger j'ai eu le dernier mot à Castillon."</p>
                            <div className='profileTestimonial'>
                                <img id="avatar" src={charles7} alt=""/>
                                <span className="vainqueur">Charles VII - </span>
                                <span> 1453</span>
                                
                            </div>
                            <div>⚔️ ⚔️ ⚔️</div>
                    </div>

                                        
                    <div className='testimonialContainer'>
                        <p className='testimonialText'>"Nous avons gagné à Bouvines contre l'empereur Otton IV !!!! Heureusement qu'il n'utilisait pas BattleChanger !"</p>
                            <div className='profileTestimonial'>
                                <img id="avatar" src={philippeAuguste} alt=""/>
                                <span className="vainqueur">  Philippe Auguste - </span>
                                <span> 1214</span>
                            </div>
                    <div>⚔️ ⚔️ ⚔️</div>
                    </div>

                    <div className='testimonialContainer'>
                        <p className='testimonialText'>"Nous n'aurions jamais gagné Hastings sans BattleChanger ! L'Angleterre est à nous !"</p>
                            <div className='profileTestimonial'>
                                <img id="avatar" src={guillaumeNormandie} alt=""/>
                                <span className="vainqueur">Guillaume de Normandie - </span>
                                <span> 1066</span>
                            </div>
                    <div>⚔️ ⚔️ ⚔️</div>
                    </div>

                    <div className='testimonialContainer'>
                        <p className='testimonialText'>"Avec Battle Changer nous n'aurions jamais fini en slip et en Slowmotion dans un film..."</p>
                            <div className='profileTestimonial'>
                                <img id="avatar" src={leonidas} alt=""/>
                                <span className="vainqueur">Léonidas - </span>
                                <span> -480 avt J. -C.</span>
                            </div>
                    <div>⚔️ ⚔️ ⚔️</div>
                    </div>

                    
                    
                    
                    
            
                
                </div>
            
            
        
        </>

    )
}

export default Testimonials