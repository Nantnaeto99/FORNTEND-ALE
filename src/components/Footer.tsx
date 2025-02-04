import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <div >


    <footer>
        <div className="footer-container">
            <div className="footer-section">
                <h4 className="foot-heading">Ale Zone</h4>
                <ul className="footer-list">
                    <li><a href="/location" className="footer-link">location</a></li>
                    <li><a href="/contact" className="footer-link">Contac Us</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4 className="foot-heading">Follow Us</h4>
                <ul className="footer-social-list">
                    <li><a href="https://facebook.com" className="footer-link">Facebook</a></li>
                    <li><a href="https://twitter.com" className="footer-link">Twitter</a></li>
                    <li><a href="https://instagram.com" className="footer-link">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom-bar">
            <p className="footer-bottom-text">
                &copy; {new Date().getFullYear()} Ale Zone. All rights reserved.
            </p>
        </div>
    </footer>
        </div>
    )
}
export  default Footer;