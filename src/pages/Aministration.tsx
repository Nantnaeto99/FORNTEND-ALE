import '../assets/styles/administration.css';

import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import admin from "../assets/images/admin.jpg";



const Administration = () => {

    //
    // const leaders = [
    //     {
    //         name: 'Mr Nani Naeto',
    //         title: 'Admin of Ale Zone ',
    //         image: admin
    //     },
    //     {
    //         name: 'Mr. Nani Naeto',
    //         title: 'Head Office Of Ale Zone  Party',
    //         image: admin,
    //     },
    //     {
    //         name: 'Mrs. Nani Naeto',
    //         title: 'Vice President Of ',
    //         image: admin,
    //     },
    //     {
    //         name: 'Mr. Nani Naeto',
    //         title: 'Deputy Head Of Ale Zone Prosperity Party',
    //         image: admin,
    //
    //     },
    // ];


    const leaders = [
        {
            name: 'Mr Nani Naeto',
            title: 'Admin of Ale Zone ',
            image: admin,
            route: '/Admin' // Add route for each leader
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
            route: '/vicepresident'
        },
        {
            name: 'Mr. Nani Naeto',
            title: 'Deputy Head Of Ale Zone Prosperity Party',
            image: admin,
            route: '/deputyhead'
        },
    ];
    return (
        <div>
            <h2>Administration</h2>

            <p>The Ale Zone  Administration, led by a team of committed officials including the President, Vice President, and other key members, is the driving force behind the region's governance and strategic development. This dedicated team works collaboratively to uphold the region's values, ensuring a future where tradition and progress coexist harmoniously.</p>


            <div className="leaders-grid">
        {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
            <div className="leader-image">
                <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-photo"
                />
            </div>
            <div className="leader-details">

             <a href='/'><h2 className="leader-name">{leader.name}</h2></a>
                <p className="leader-title">{leader.title}</p>
                <div className="social-icons">
                    <a href="#" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="#" className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="icon">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    ))}
</div>


</div>
    );
};

export default Administration;