import './Footer.css'
import React from 'react'
import google from '../../images/logos_google-gmail.png';
import twitter from '../../images/skill-icons_twitter.png';
import whatsapp from '../../images/logos_whatsapp-icon.png';
import linkedin from '../../images/skill-icons_linkedin.png'
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate()
    const handleLegal = () => {
        navigate('/legal')
    }

    const handleCookie = () => {
        navigate('/cookie-policy')
    }

    const handlePrivacy = () => {
        navigate('/privacy')
    }

    const handleFAQ = () => {
        navigate('/FAQ')
    }

    const handleContact = () => {
        navigate('/contact')
    }

    return (
        <div className="footer-container">
            <div className='footer-content'>
                <div className='footer-logo'>
                    <section style={{ marginLeft: '9em', marginTop: '3.5em' }}>
                        <div class="content">
                            <div class="text-wrapper">
                                <h4>Phoenix</h4>
                            </div>
                            <div class="text-wrapper">
                                <h4>Phoenix</h4>
                            </div>
                        </div>
                    </section>
                    <div className='footer-text-content'>
                        <p className='footer-logo-text'>Bringing your vision to life</p>
                        <p>Nyeri, Kenya</p>
                        <p>+(254)7 123 456 789</p>
                    </div>
                </div>
                <div className='support-tags'>
                    <p style={{ color: '#ccc' }}>SUPPORT</p>
                    <p>Pricing</p>
                    <p onClick={handleFAQ}>FAQ</p>
                    <p onClick={handleContact}>Contact us</p>
                </div>
                <div className='company-tags'>
                    <p style={{ color: '#ccc' }}>COMPANY</p>
                    <p onClick={handlePrivacy}>Quality & Privacy Policy</p>
                    <p onClick={handleCookie}>Cookie Policy</p>
                    <p onClick={handleLegal}>Legal Notice</p>
                </div>
                <div className='socials-tags'>
                    <p>OUR SOCIALS</p>
                    <div className='socials-links'>
                        <img src={linkedin}></img>
                        <img src={whatsapp}></img>
                        <img src={twitter}></img>
                        <img src={google}></img>
                    </div>
                </div>
            </div>
            <hr className='line-marker'></hr>
            <div className='footer-tag'>©2023 Phoenix. All rights reserved</div>
        </div>
    )

}

export default Footer