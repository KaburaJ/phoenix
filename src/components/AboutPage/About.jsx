import React from "react"
import '../AboutPage/About.css'
import '../Home/HomePage.css'
import Navbar from "../../common/Navbar/Navbar"
import Footer from "../../common/footer/Footer"
import icon1 from '../../images/icons/healthicons_money-bag-removebg-preview.png'
import icon2 from '../../images/icons/Vector.png'
import icon3 from '../../images/icons/mdi_robot-industrial-removebg-preview.png'
import person1 from '../../images/partners/Rectangle 65.png'
import person2 from '../../images/partners/Rectangle 66.png'
import person3 from '../../images/partners/Rectangle 67.png'
import person4 from '../../images/partners/Rectangle 68.png'
import person5 from '../../images/partners/Rectangle 69.png'
import person6 from '../../images/partners/Rectangle 70.png'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about">
                <p className='app-name'>
                    <span>A</span>
                    <span>B</span>
                    <span>O</span>
                    <span>U</span>
                    <span>T</span>
                    <span style={{ width: '5px' }}></span>
                    <span>U</span>
                    <span>S</span>
                </p>
                <div className='headers' style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                    <span className='main-header' style={{ color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Building your vision</span>
                    <span className='main-header' style={{ color: '#008000', fontSize: 52, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}> <br />one solution at a time</span></div>
                <div className="about-text">
                    <div className='about-sub-text' style={{ marginBottom: '3em', marginTop: '2em', marginLeft: '3em', width: '650px' }}>
                        <span className='text' style={{ color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>
                    We find joy when <br></br></span><span className='text' style={{ color: '#008000', fontSize: 48, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>making you happy<br /></span><span style={{ color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}><br /></span>
                    <span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word' }}>Here at </span><span style={{ color: '#008000', fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word' }}>Phoenix</span>
                    <span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word' }}> we endeavour to bring solutions to your doorstep. We take your vision and make it a reality in a timely fashion. Our team of six are passionate professionals in the tech space who find joy in curating hardware, software, hardware-software integration and all round robotics' solutions.</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}> </span></div></div>
                <div className="youtube-video"><p>Phoenix</p></div>
                <div className="section-tags" style={{ paddingTop: '6em' }}>OUR MISSION</div>
                <div className='value-proposition'>
                    <h2 className='value-header'>Our team of professionals guarantees quality solutions at affordable rates</h2>
                    <div className='icons'>
                        <div className='animated-border-container'>
                            <div className='animated-border'></div>
                        </div>
                        <div className='icon-images'>
                            <img className='icon-1' src={icon1} alt='Icon 1'></img>
                            <img className='icon-2' src={icon2} alt='Icon 2'></img>
                            <img className='icon-3' src={icon3} alt='Icon 3'></img>
                        </div>
                    </div>
                    <div className='icon-text'>
                        <p className='line-up' style={{ marginLeft: "1em", width: '250px' }}>
                            <p className='text-header'>Cost-effective and innovative solutions for your business needs.</p> <p className='text-sub-header'>We understand the importance of cost efficiency and strive to provide creative solutions that align with your budget.</p>
                        </p>
                        <p className='line-up' style={{ marginLeft: '-9em', width: '300px' }}>
                            <p className='text-header'>Quality-driven and performance-centered solutions tailored to your requirements.</p> <p className='text-sub-header'>Our dedicated team focuses on delivering high-quality results that meet and exceed your expectations, ensuring optimal performance for your systems.</p>
                        </p>
                        <p className='line-up-1' style={{ marginLeft: '-6em', width: '250px' }}>
                            <p className='text-header'>Rapid Innovation Acceleration within a short timeframe.</p> <p className='text-sub-header'>We are committed to accelerating your innovation journey, delivering cutting-edge solutions in record time to keep your business ahead in the fast-paced tech landscape.</p>
                        </p>
                    </div>
                </div>
                
                <div className="section-tags" style={{ paddingTop: '6em' }}>OUR VISION</div>
                <div className='value-proposition'>
                    <h2 className='value-header'>Our team of professionals guarantees quality solutions at affordable rates</h2>
                    <div className='icons'>
                        <div className='animated-border-container'>
                            <div className='animated-border'></div>
                        </div>
                        <div className='icon-images'>
                            <img className='icon-1' src={icon1} alt='Icon 1'></img>
                            <img className='icon-2' src={icon2} alt='Icon 2'></img>
                            <img className='icon-3' src={icon3} alt='Icon 3'></img>
                        </div>
                    </div>
                    <div className='icon-text'>
                        <p className='line-up' style={{ marginLeft: "1em", width: '250px' }}>
                            <p className='text-header'>Cost-effective and innovative solutions for your business needs.</p> <p className='text-sub-header'>We understand the importance of cost efficiency and strive to provide creative solutions that align with your budget.</p>
                        </p>
                        <p className='line-up' style={{ marginLeft: '-9em', width: '300px' }}>
                            <p className='text-header'>Quality-driven and performance-centered solutions tailored to your requirements.</p> <p className='text-sub-header'>Our dedicated team focuses on delivering high-quality results that meet and exceed your expectations, ensuring optimal performance for your systems.</p>
                        </p>
                        <p className='line-up-1' style={{ marginLeft: '-6em', width: '250px' }}>
                            <p className='text-header'>Rapid Innovation Acceleration within a short timeframe.</p> <p className='text-sub-header'>We are committed to accelerating your innovation journey, delivering cutting-edge solutions in record time to keep your business ahead in the fast-paced tech landscape.</p>
                        </p>
                    </div>
                </div>

                <div className="metrics">
                    <div className="metric">
                        <h2>30</h2>
                        <p>Number of PCBs delivered</p>
                    </div>
                    <div className="metric">
                        <h2>30</h2>
                        <p>Number of PCBs delivered</p>
                    </div>
                    <div className="metric">
                        <h2>30</h2>
                        <p>Number of PCBs delivered</p>
                    </div>
                    <div className="metric">
                        <h2>30</h2>
                        <p>Number of PCBs delivered</p>
                    </div>
                </div>
                <div className="team">
                    <div className="section-tags">THE TEAM</div>
                    <h2>Our experienced leadership team of entrepreneurs and innovators</h2>
                    <div className="images">
                        <div className="image-content">
                            <img src={person1}></img>
                            <p>Carles Puente, PhD.<br></br>
                                <span style={{ color: '#008000' }}>Founder & SVP IP and Innovation</span><br></br>
                                Always with a revolutionary idea</p>
                        </div>
                        <div className="image-content">
                            <img src={person2}></img>
                            <p>Carles Puente, PhD.<br></br>
                                <span style={{ color: '#008000' }}>Founder & SVP IP and Innovation</span><br></br>
                                Always with a revolutionary idea</p>
                        </div>
                        <div className="image-content">
                            <img src={person3}></img>
                            <p>Carles Puente, PhD.<br></br>
                                <span style={{ color: '#008000' }}>Founder & SVP IP and Innovation</span><br></br>
                                Always with a revolutionary idea</p>
                        </div>
                        <div className="image-content">
                            <img src={person4}></img>
                            <p>Carles Puente, PhD.<br></br>
                                <span style={{ color: '#008000' }}>Founder & SVP IP and Innovation</span><br></br>
                                Always with a revolutionary idea</p>
                        </div>
                        <div className="image-content">
                            <img src={person5}></img>
                            <p>Carles Puente, PhD.<br></br>
                                <span style={{ color: '#008000' }}>Founder & SVP IP and Innovation</span><br></br>
                                Always with a revolutionary idea</p>
                        </div>
                        <div className="image-content">
                            <img src={person6}></img>
                            <p>Carles Puente, PhD.<br></br>
                                <span style={{ color: '#008000' }}>Founder & SVP IP and Innovation</span><br></br>
                                Always with a revolutionary idea</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About