import logo from '../assets/images/logo.PNG';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
    return (
        <footer>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <ul className="services">
                <h1>SERVICES</h1>
                <li>Kitchen Renovatoin</li>
                <li>Water Proofing</li>
                <li>Tiling</li>
                <li>Kitchen Splash Back</li>
            </ul>
            <ul className="company">
                <h1>COMPANY</h1>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="contact-details">
                <div><PhoneIcon /><p>+61 469735781</p></div>
                <div><EmailIcon /><p>zamanqasimi@gmail.com</p></div>
                <div><LocationOnIcon /><p>313 PARK RD, AUBURN, 2164, NSW</p></div>
            </div>
        </footer>
    );
}

export default Footer;
