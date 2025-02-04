

 import "../assets/images/twitter.png"
 // import twitter from "../assets/images/twitter.png";
 // import Facebook from "../assets/images/Facebook.png";
import  '../assets/styles/AboutUs.css'
 import Location from "./Location.tsx";
const ContactUs = () => {
    const contactInfo = {
        phone: "+251921654622",
        email: "info@AleZonecommunication.gov.et",
        website: "Ale Zone People's Communication Bureau",
        address: "Ale Zone, Kolango Town, SNNPR, Ethiopia",
    };

    return (
        <div className='parent-container'>
        <div className="contact-us-container">
            <p className='contact-for'>Contact Us Now</p>
            <div className="contact-box">
                <p>Phone: {contactInfo.phone}</p>
                <p>Email: {contactInfo.email}</p>
                <p>Website: <a href={`//${contactInfo.website}`} target="_blank" rel="noopener noreferrer">{contactInfo.website}</a></p> {/* Make website clickable */}
                <p>Address: {contactInfo.address}</p>
            </div>
                {/* Add "Follow Us" links here */}
                <div className="social-links">

                    {/*<a href="#" target="_blank" rel="noopener noreferrer"><img src="/facebook-icon.png" alt="Facebook" /></a>*/}
                    {/*<a href="#" target="_blank" rel="noopener noreferrer"><img src="/twitter-icon.png" alt="Twitter" /></a>*/}

                    <Location/>


            </div>
        </div>


        </div>
    );
};

export default ContactUs;
