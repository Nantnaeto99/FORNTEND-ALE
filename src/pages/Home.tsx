
import '../assets/images/admin.jpg'
import '../assets/styles/Home.css';
import admin from "../assets/images/admin.jpg";
import stone from '../assets/images/stone.jpg';
import GovOfficials from "../Home/GovOfficials.tsx";
import {Link} from "react-router-dom";



const Home = ()=>{


    return(
        <div className='home-container'>
            <h2>Welcome to the Ale Zone Government communication affairs office!</h2>
            <p>We warmly welcome you to the official website of the Ale Zone Government Communication Affairs Office.</p>
            <img src={admin} alt="Logo" className="logo-admin" />
            <h1>Meet Our Leader, Guiding The Ale Zone With Vision and Dedication</h1>
            <p>Meet Mr.Magssie Guyalo , the visionary leader of the Ale Zone, whose dynamic and compassionate leadership is sculpting a brighter future for our community.</p>
            <img src={stone} alt="Logo" className="stone" />
            <div className='dev-explore-container'>
                <Link to="/tourism" className='explore-link'>
                    Explore Our Town
                </Link>
            </div>

         <GovOfficials/>
        </div>
    )
}
export default Home