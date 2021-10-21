
import "../App.css"
import Test from './Test';
import Palette from './Palette';
import NavBar from './NavBar';
import Header from './Header';
import Map from './Map';
import Testimonials from './/Testimonials';
import Footer from './Footer';
import Contact from './Contact';
import Logo from './Logo';
import Bandeau from "./Bandeau";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import CivilizationList from "./CivilizationList";


function Home() {

  
  return (
   
    <div className='App'>
      <Logo />
      <div className="centerContainer">
        <Bandeau/>
        {/* <NavBar/> */}
        {/* <Palette/> */}
        <Header/>
        <Map/>
        <CivilizationList />
        <Testimonials/>
      </div>
      <Footer/>
    </div>

   
  );
}

export default Home;
