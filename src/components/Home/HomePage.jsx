import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import { FaBeer, FaChartBar, FaCloud, FaDoorClosed, FaHammer, FaLaptop, FaRobot, FaServer, FaShieldAlt } from "react-icons/fa";
import Navbar from '../../common/Navbar/Navbar'
import Footer from '../../common/footer/Footer'
import './HomePage.css'
import icon1 from '../../images/icons/healthicons_money-bag-removebg-preview.png'
import icon2 from '../../images/icons/Vector.png'
import icon3 from '../../images/icons/mdi_robot-industrial-removebg-preview.png'
import logo1 from '../../images/ALTIUM-LOGO-removebg-preview.png'
import logo2 from '../../images/AUTODESK-LOGO-removebg-preview.png'
import logo3 from '../../images/EASYEDA-LOGO-removebg-preview.png'
import logo4 from '../../images/FLUTTER-LOGO-removebg-preview.png'
import logo5 from '../../images/KICAD-LOGO-removebg-preview.png'
import logo6 from '../../images/LTSPICE-LOGO-removebg-preview.png'
import logo7 from '../../images/MULTISIM-LOGO-removebg-preview.png'
import logo8 from '../../images/ROS-LOGO-removebg-preview.png'
import logo9 from '../../images/REACTN-LOGO-removebg-preview.png'

const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    const icons = [
        <img src={logo1} alt="Logo 1" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
        <img src={logo2} alt="Icon 2" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
        <img src={logo3} alt="Icon 1" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
        <img src={logo4} alt="Icon 2" className='tech-logo' style={{ width: '130px', height: '90px' }} />,
        <img src={logo5} alt="Icon 1" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
        <img src={logo6} alt="Icon 2" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
        <img src={logo7} alt="Icon 1" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
        <img src={logo8} alt="Icon 2" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
        <img src={logo9} alt="Icon 1" className='tech-logo' style={{ width: '120px', height: '90px' }} />,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, settings.autoplaySpeed);

        return () => clearInterval(interval);
    }, [icons.length, settings.autoplaySpeed]);

    return (
        <div className='home'>
            <div className='container'>
                <Navbar />
                <div className='home-main'>
                    <div className='home-headers'>
                        <div className='main-context'>
                            <p className='app-name'>
                                <span>P</span>
                                <span>H</span>
                                <span>O</span>
                                <span>E</span>
                                <span>N</span>
                                <span>I</span>
                                <span>X</span>
                            </p>

                            <div className='main-text'>
                                <span className='span-green'>Giving</span>
                                <span className='span-green'>Quality</span>
                                <span className='span-green'>for all your</span>
                                <span className='span-green'>Hardware</span>
                                <span className='span-green'>and</span>
                                <span className='span-green'>Software</span>
                                <span className='span-green'>Needs</span>
                            </div>
                            <p className='view-button'><p class="animated-text">
                                <span class="letter">VIEW OUR</span>
                                <span class="word">SOLUTIONS</span>
                            </p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animated-line-container">
                <div className="animated-line">
                    <div className="diagonal-line"></div>
                    <div className="diagonal-line"></div>
                    <div className="diagonal-line"></div>
                </div>
            </div>
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
            <div className='solutions-section'>
                <div className='solutions-text'>
                    <h2 className='header'><p class="animated-text">
                        <span className="letter" style={{ color: '#008000' }}>What we bring to the table</span>
                    </p></h2>
                    <div className='animated-text' style={{ marginTop: '-4em' }}>
                        <h3 style={{ paddingTop: '20px' }}><FaHammer />  Hardware Solutions</h3>
                        <h3><FaLaptop />  Software Solutions</h3>
                        <h3><FaServer />  Cloud Solutions</h3>
                        <h3 style={{ paddingBottom: '2em' }}><FaDoorClosed />  Security Solutions</h3>
                    </div>
                </div>
                <div className='solutions-image'></div>
            </div>
            <div className='solutions-section' style={{ backgroundColor: 'white' }}>
                <div className='solutions-text'>
                    <h2 className='header'>
                        <p class="animated-text">
                            <span className="letter" style={{ color: '#008000' }}>Empowering Your Digital Journey</span>
                        </p>
                    </h2>
                    <div className='animated-text' style={{ marginTop: '-4em' }}>
                        <h3 style={{ paddingTop: '20px' }}>
                            <FaChartBar />  Data Analytics
                            <span className="additional-info"> Unlock insights from your data</span>
                        </h3>
                        <h3>
                            <FaCloud />  Cloud Infrastructure
                            <span className="additional-info"> Scalable and reliable cloud solutions</span>
                        </h3>
                        <h3>
                            <FaRobot />  Automation Solutions
                            <span className="additional-info"> Streamline your processes</span>
                        </h3>
                        <h3 style={{ paddingBottom: '2em' }}>
                            <FaShieldAlt />  Cybersecurity Services
                            <span className="additional-info"> Protect your digital assets</span>
                        </h3>
                    </div>
                </div>
                <div className='solutions-image-1' style={{ width: '726px' }}></div>
            </div>

            <div className='technologies-section'>
                <p className='app-name' style={{ backgroundColor: 'transparent', width: '200px' }}>
                    <span>O</span>
                    <span>U</span>
                    <span>R</span>
                    <span style={{ width: '5px' }}></span>
                    <span>T</span>
                    <span>E</span>
                    <span>C</span>
                    <span>H</span>
                    <span>N</span>
                    <span>O</span>
                    <span>L</span>
                    <span>O</span>
                    <span>G</span>
                    <span>I</span>
                    <span>E</span>
                    <span>S</span>
                </p>

                <div className='text'>
                    <span>Technologies we deal with in building </span>
                    <span className='green'> solutions </span>
                    <span>curated </span>
                    <span className='green'>for you</span>
                </div>
                <div className='technologies-icons'>
                    {/* <img></img> */}

                </div>
                <div>
                    <Slider {...settings} className='icons-carousel'>
                        {icons.map((icon, index) => (
                            <div key={index} className='icon'>{icon}</div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage