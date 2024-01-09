import './Navbar.css';
import React from 'react'
import darkmode from '../../images/line-md_moon-rising-filled-alt-loop.png'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate()

    const handleSolutions = () => {
        navigate('/solutions')
    }

    const handleHome = () => {
        navigate('/home')
    }

    const handleAbout = () => {
        navigate('/about')
    }

    const handleContact = () => {
        navigate('/contact')
    }

    return (
        <div className="navbar-container">
            <section  style={{marginLeft:'9em', marginTop:'3.5em'}} onClick={handleHome}>
                <div class="content">
                    <div class="text-wrapper">
                        <h4>Phoenix</h4>
                    </div>
                    <div class="text-wrapper">
                        <h4>Phoenix</h4>
                    </div>
                </div>
            </section>
            <p onClick={handleHome}>Technologies</p>

            <div className='nav-options'>
                <h3 className='solutions-header' onClick={handleSolutions}>Solutions</h3>
                <h3 className='solutions-header' onClick={handleAbout}>About</h3>
                <h3 className='solutions-header' onClick={handleContact}>Contact</h3>
                <img className='dark-mode-img' src={darkmode}></img>
            </div>
            <div className='sample-button'>
                <h3 className='sample-header'>SAMPLE US</h3>
            </div>
        </div>

    )
}

export default Navbar