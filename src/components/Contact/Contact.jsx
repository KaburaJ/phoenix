import React from "react"
import '../Contact/Contact.css'
import Navbar from "../../common/Navbar/Navbar"
import map from '../../images/map.png'
import partnerimage from '../../images/generate-a-professional-image-of-collaboration-amongst-people-in-a-company-just-like-6-people-that.png'
import Footer from "../../common/footer/Footer"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact">
                <div className="contact-header"><p className='app-name'>
                                <span>C</span>
                                <span>O</span>
                                <span>N</span>
                                <span>T</span>
                                <span>A</span>
                                <span>C</span>
                                <span>T</span>
                                <span style={{ width: '5px' }}></span>
                                <span>U</span>
                                <span>S</span>
                            </p></div>
                <div className="contact-body">
                    <div className="form-section">
                        <div className="form-header">
                            <div className="email">info@phoenix.co.ke</div>
                            <div className="icon"></div>
                        </div>
                        <div className="form">
                            <p>Your Name</p>
                            <input className='long-input' type="text"></input>
                            <p>Your Address</p>
                            <input className='long-input' type="text"></input>
                            <p>Phone Number</p>
                            <input className='long-input' type="text"></input>
                            <p>Your Message</p>
                            <textarea className='long-input-message' type="text"></textarea>
                            <button className="send-button">Send</button>

                        </div>
                    </div>
                    <div className="column-1">
                        <div className="location-tag">Nyeri
                        </div>
                        <img className="map-image" src={map}></img>
                        <div className="map-text"><span>DEDAN KIMATHI UNIVERSITY, <br />Kiganjo/Mathari, B5, Nyeri<br /><br /></span><span>Nyeri, Kenya<br />+(254)7 123 456 789</span></div>
                    </div>
                </div>
                <div className="partner">
                    <div>
                        <div className="partner-header">JOIN US<br /></div>
                        <div className="partner-text">Be part of a revolutionary innovation</div>
                        <div className="partner-button">PARTNER WITH US</div>
                    </div>
                    <img className="partner-image" src={partnerimage}></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact