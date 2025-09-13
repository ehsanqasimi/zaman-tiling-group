import { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('https://formspree.io/f/xleqdvgq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Form submission failed. Please try again.' });
            }
        } catch {
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        }
    };

    return (
        <section id="contact" className="contact">
            <div>
                <h3>Contact US</h3>
                <p>We are here for you! How can we help?</p>
            </div>

            <div className="contactContainer">
                <div className="contactInfo">
                    <div className="info">
                        <MailOutlineIcon />
                        <p>zamanqaimi@gmail.com</p>
                    </div>
                    <div className="info">
                        <LocationOnIcon />
                        <p>313 PARK RD, AUBURN, 2164, NSW</p>
                    </div>
                    <div className="info">
                        <PhoneIcon />
                        <p>+61 469735781</p>
                    </div>
                </div>

                <div className="contactForm">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                placeholder="Full Name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                placeholder="Phone Number"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div>
                            <textarea
                                maxLength={1000}
                                name="message"
                                placeholder="Describe the project"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <button className="submit" type="submit">Send</button>
                        {status.message && (
                            <p role="alert" style={{ marginTop: 10 }}>
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            
        </section>
    );
}

export default Contact;
