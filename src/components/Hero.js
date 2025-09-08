import heroImage1 from '../assets/images/heroImages/1.jpg';
import heroImage2 from '../assets/images/heroImages/2.jpg';
import heroImage3 from '../assets/images/heroImages/3.jpg';

function Hero() {
    return (
        <div id="home" className="hero">
            <div className="text">
                <h1>Zaman Tiling Group <small>PTY LTD</small></h1>
                <p>
                    we are a private tiling company with years of experience and have done
                    outstanding works throughout this journey. don’t doubt we will give you the right service.
                </p>
                <a className="hero-call-to-action" href="#contact">Get a quote</a>
            </div>
            <div className="images">
                <img className="heroImage1" src={heroImage1} alt="" />
                <img className="heroImage3" src={heroImage3} alt="" />
                <img className="heroImage2" src={heroImage2} alt="" />
            </div>
        </div>
    );
}

export default Hero;
