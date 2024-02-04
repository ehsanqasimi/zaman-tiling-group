import logo from './assests/images/logo.PNG'

import Service from './components/Service'

import heroImage1 from './assests/images/heroImages/1.jpg'
import heroImage2 from './assests/images/heroImages/2.jpg'
import heroImage3 from './assests/images/heroImages/3.jpg'

import './assests/styles/style.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import XIcon from '@mui/icons-material/X';

import { useEffect, useState, useRef } from 'react';
import 'animate.css';
import { Email, Facebook, Phone } from '@mui/icons-material'
import ImageGallery from "react-image-gallery";
import Faq from "react-faq-component";

import 'animate.css'

function App() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace 'YOUR_FORMSPREE_ENDPOINT' with the actual Formspree endpoint URL
    const endpoint = 'https://formspree.io/f/xleqdvgq';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Form submitted successfully!');
      } else {
        // Handle error, e.g., show an error message
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const [menuOpen, setMenuOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const data = {
    title: "FAQ (Frequantly Asked Questions)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };
  const styles = {
    bgColor: '#D9D9D9',
    titleTextColor: 'black',
    titleTextSize: '1rem',
    rowTitleColor: 'black',
    rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '20px',
    rowContentPaddingLeft: '50px',
    // rowContentPaddingRight: '150px',
    // arrowColor: "red",
    transitionDuration: "1s",
    timingFunc: "ease",

  };

  const config = {
    animate: true,

    tabFocus: true
  };





  const [isIntersecting, setIsIntersecting] = useState([]);
  const ref = useRef();
  ref.current = []
  
    const addToRef = (el) => {
      if (el && !ref.current.includes(el)) {
        ref.current.push(el)
      }
      console.log(ref.current)
    }

  //  useEffect(() => {
      isIntersecting.forEach(intersect => {
        
      })
  //    const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         console.log(entry)
           
  //         //setIsIntersecting(oldArray => [...oldArray, entry.isIntersecting]);
  //       })
  //     }
  //    );
  //    console.log(isIntersecting);
  //    ref.current.forEach(el => {
  //      observer.observe(el);
  //    })
  //    return () => observer.disconnect();
  //  }, [isIntersecting]);

  // useEffect(() => {
  //   isIntersecting.forEach((intersect,index) => {
  //     if (intersect) {
  //       //ref.current.classList.add('animate__fadeInLeft')
  //        ref.current[index].classList.add("animate__fadeInLeft");
  //     }

  //   })
  //  }, [isIntersecting]);



  return (
    <div className="App">
      {
        screenWidth < 800 ?
          <nav >
            <img className='logo' src={logo} alt="" />

            <ul className={`animate__animated ${!menuOpen ? 'animate__fadeOutUpBig' : 'animate__fadeInDownBig'} `}>

              <li onClick={() => setMenuOpen(!menuOpen)}><a href="#home">Home</a></li>

              <li onClick={() => setMenuOpen(!menuOpen)}><a href="#about">About</a></li>
              <li onClick={() => setMenuOpen(!menuOpen)}><a href="#services">Services</a></li>
              <li onClick={() => setMenuOpen(!menuOpen)}><a href="#gallery">Gallery</a></li>
              <li onClick={() => setMenuOpen(!menuOpen)}><a href="#contact">Contact</a></li>
            </ul>

            {
              menuOpen ? <CloseIcon className='close' onClick={() => setMenuOpen(!menuOpen)} /> : <MenuIcon className='open' onClick={() => setMenuOpen(!menuOpen)} />
            }
          </nav>
          :
          <nav >
            <img className='logo' src={logo} alt="" />
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#gallery'>Gallery</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
      }
      <main>
        <div id='home' className="hero">
          <div  className="text">
            
              <h1>Zaman Tiling Group <small>PTY LTD</small></h1>
              <p>we are a private tilling company with
                years of experience and have done
                outstanding works throughout this journey.
                don’t doubt we will give you the right service.</p>
              <a className='hero-call-to-action' href="#contact">Get a quote</a>
            
          </div>
          <div className="images">
            
              <img className='heroImage1 ' src={heroImage1} alt="" />
           


            <img className='heroImage3 ' src={heroImage3} alt="" />



            <img className='heroImage2 ' src={heroImage2} alt="" />

          </div>
        </div>
        
        <div ref={addToRef} id='about' className="about animate__animated">
            <h1>ABOUT US</h1>
            <p>Our mission is to exceed client expectations, providing not just tiling services but an experience marked by reliability, integrity, and superior workmanship. We believe that a beautifully tiled space is a testament to our commitment to quality and aesthetics.</p>
          </div>
        
        <div ref={addToRef} id='services' className="services animate__animated">
          <h3 className='services-header'>What we offer</h3>
          <div className='servicesContainer'>

            <Service
              serviceName="Bathroom Renovation"
              serviceDesc="Transform your bathroom into a haven of 
                        luxury and comfort through our 
                        comprehensive renovation services,
                        combining functionality with elegant 
                        design."
            />
            <Service
              serviceName="Water Proofing"
              serviceDesc="Ensure lasting protection 
            with our advanced 
            waterproofing solutions, 
            guarding your spaces against 
            moisture and water damage."
            />
            <Service
              serviceName="Tiling"
              serviceDesc="Ensure lasting protection 
            with our advanced 
            waterproofing solutions, 
            guarding your spaces against 
            moisture and water damage."
            />
            <Service
              serviceName="Kitchen Splash Back"
              serviceDesc="Ensure lasting protection 
            with our advanced 
            waterproofing solutions, 
            guarding your spaces against 
            moisture and water damage."
            />

          </div>
        </div>
        <div ref={addToRef} id='gallery' className="galleries animate__animated">
          <div className="gallery">
            <h5>Tiling Gallery</h5>
            <ImageGallery
              items={images}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={3000}
              flickThreshold={0.9}
              showBullets={true}
              showThumbnails={false}
            />
          </div>
          <div className="gallery">
            <h5>Bathroom Renovation Gallery</h5>
            <ImageGallery
              items={images}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={3000}
              flickThreshold={0.9}
              showBullets={true}
              showThumbnails={false}
            />
          </div>
          <div className="gallery">
            <h5>Kitchen Splash  Back Gallery</h5>
            <ImageGallery
              items={images}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={3000}
              flickThreshold={0.9}
              showBullets={true}
              showThumbnails={false}
            />
          </div>
          <div className="gallery">
            <h5>Water Proofing Gallery</h5>
            <ImageGallery
              items={images}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={3000}
              flickThreshold={0.9}
              showBullets={true}
              showThumbnails={false}

            />
          </div>

        </div>
        <div className="faq">
          <Faq
            data={data}
            styles={styles}
            config={config}
          />
        </div>
        <div id='contact' className="contact">
          <div>
            <h3>Contact US</h3>
            <p>We are here for you! How can we help?</p>
          </div>
          <div className="contactInfo">
            <div className="info">
              <InstagramIcon />
              <p>zamanqaimi@gmail.com</p>
            </div>
            <div className="info">
              <MailOutlineIcon />
              <p>zamanqaimi@gmail.com</p>
            </div>
            <div className="info">

              <LocationOnIcon />
              <p>zamanqaimi@gmail.com</p>
            </div>
            <div className="info">

              <Phone />
              <p>zamanqaimi@gmail.com</p>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <div>
                <input placeholder='Full Name' type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <br />
              <div>

                <input placeholder='Email' type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <br />
              <div>

                <input placeholder='Phone Number' type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <br />
              <div>

                <textarea maxLength={1000} name="message" placeholder='Describe the project' value={formData.message} onChange={handleChange} />
              </div>
              <br />
              <button className='submit' type="submit">Send</button>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <div className="logo"><img src={logo} alt='logo' /></div>
        <ul className='services'>
          <h1>SERVICES</h1>
          <li>Kitchen Renovatoin</li>
          <li>Water Proofing</li>
          <li>Tiling</li>
          <li>Kitchen Splash Back</li>
        </ul>
        <ul className='company'>
          <h1>COMPANY</h1>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
        <div className="social-media">
          <InstagramIcon />
          <XIcon />
          <Facebook />
        </div>
        <div className="contact-details">
          <div><Phone /><p>-1-4545789-3</p></div>
          <div><Email /><p>zamanqasimi@gmail.com</p></div>
          <div><LocationOnIcon /><p>313 PARK RD, AUBURN, 2164, NSW</p></div>
        </div>
      </footer>
    </div>
  );
}

export default App;

