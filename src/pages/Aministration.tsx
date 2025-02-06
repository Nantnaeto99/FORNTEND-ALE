import '../assets/styles/administration.css';

import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import admin from "../assets/images/admin.jpg";



const Administration = () => {



    const leaders = [
        {
            name: 'Mr Nani Naeto',
            title: 'Admin of Ale Zone ',
            image: admin,
            route: '/admin',

        },
        {
            name: 'Mr. Nani Naeto',
            title: 'Head Office Of Ale Zone  Party',
            image: admin,
            route: '/headoffice'
        },
        {
            name: 'Mrs. Nani Naeto',
            title: 'Vice President Of ',
            image: admin,
            route: '/vicepresdant'
        },
        {
            name: 'Mr. Nani Naeto',
            title: 'Deputy Head Of Ale Zone Prosperity Party',
            image: admin,
            route: '/DeputyHead'
        },
        {
            name: 'Mr. Nani Naeto',
            title: 'Deputy Head Of Ale Zone Prosperity Party',
            image: admin,
            route: '/headoforganization'
        },
    ];
    return (

             <div className="leaders-grid">
                    {leaders.map((leader, index) => (
                    <div key={index} className="leader-card">
                        <div className="leader-image">
                            <img
                                src={leader.image}
                                alt={`${leader.name} - Portrait`} // More descriptive alt text
                                className="leader-photo"
                            />
                        </div>
                        <div className="leader-details">
                            <a href={leader.route}> {/* Link to leader's route */}
                                <h3 className="leader-name">{leader.name}</h3> {/* Consider heading level */}
                            </a>
                            <p className="leader-title">{leader.title}</p>
                            <div className="social-icons">
                                {/* Replace # with actual URLs or remove icons */}
                                <a href="#" className="icon"> <FaTwitter /> </a>
                                <a href="#" className="icon"> <FaFacebookF /> </a>
                                <a href="#" className="icon"> <FaLinkedinIn /> </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


    );
};

export default Administration;
