import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/images/logo.PNG';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1024
    );

    useEffect(() => {
        const onResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const NavLinks = () => (
        <ul className={screenWidth < 800 ? `animate__animated ${!menuOpen ? 'animate__fadeOutUpBig' : 'animate__fadeInDownBig'}` : ''}>
            <li onClick={() => setMenuOpen(false)}><a href="#home">Home</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="#about">About</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="#services">Services</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="#gallery">Gallery</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
    );

    return (
        <nav>
            <img className="logo" src={logo} alt="Zaman Tiling Group logo" />
            {screenWidth < 800 ? (
                <>
                    <NavLinks />
                    {menuOpen
                        ? <CloseIcon className="close" onClick={() => setMenuOpen(false)} />
                        : <MenuIcon className="open" onClick={() => setMenuOpen(true)} />
                    }
                </>
            ) : (
                <NavLinks />
            )}
        </nav>
    );
}

export default Navbar;
