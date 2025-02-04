import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="nav-logo" />
                    </Link>
                </div>

                <div className="navbar-mobile-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>About</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/news" className="nav-link dropdown-toggle" onClick={toggleMobileMenu}>News</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/ale-news" className="dropdown-item" onClick={toggleMobileMenu}>Ale News</Link></li>
                            <li><Link to="/" className="dropdown-item" onClick={toggleMobileMenu}>International News</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/documents" className="nav-link" onClick={toggleMobileMenu}>Documents</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tourism" className="nav-link" onClick={toggleMobileMenu}>Tourism</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/administration" className="nav-link" onClick={toggleMobileMenu}>Administration</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/more" className="nav-link dropdown-toggle" onClick={toggleMobileMenu}>More</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/services" className="dropdown-item" onClick={toggleMobileMenu}>Services</Link></li>
                            <li><Link to="/events" className="dropdown-item" onClick={toggleMobileMenu}>Events</Link></li>
                            <li><Link to="/contact" className="dropdown-item" onClick={toggleMobileMenu}>Opinions</Link></li>
                            <li><Link to="/faq" className="dropdown-item" onClick={toggleMobileMenu}>FAQ</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;