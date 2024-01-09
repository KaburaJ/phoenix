import React, { useState } from "react"
import '../FAQs/FAQ.css'
import Navbar from "../../common/Navbar/Navbar"
import { FaMinus, FaPlus } from "react-icons/fa"
import Footer from "../../common/footer/Footer"

const FAQ = () => {
    const [expanded, setExpanded] = useState({});

    const handleToggle = (index) => {
        setExpanded((prev) => ({
            ...prev, [index]: !prev[index]
        }))
    }

    const FAQs = {
        0: {
            question: 'What services does your company provide?',
            response: 'Our company offers a comprehensive range of services, including hardware development, software solutions, mechanical design, and PLC programming to bring your unique visions to life.',
            tag: 'Service provision'
        },
        1: {
            question: 'Can you customize solutions based on specific project requirements?',
            response: 'Yes, we specialize in providing customized solutions tailored to meet the specific needs and requirements of each project.'
            , tag: 'Customization'
        },
        2: {
            question: 'How do you ensure the security of software solutions?',
            response: 'We implement industry-standard security practices and conduct thorough testing to ensure the integrity and security of our software solutions.'
            , tag: 'Security'
        },
        3: {
            question: 'What industries do you cater to with your technology solutions?',
            response: 'Our expertise spans across various industries, including robotics, data, Interface design, industry 4.0, etc., where our solutions are designed to address diverse challenges.'
            , tag: 'Target Market'
        },
        4: {
            question: 'What kind of hardware development services do you offer?',
            response: 'Our hardware development services include PCB design, prototyping, mechanical design and fabrication, etc.',
            tag: 'Hardware Services'
        },
        5: {
            question: 'Can you integrate existing systems with your solutions?',
            response: 'Yes, we have experience in seamlessly integrating our solutions with existing systems to ensure compatibility and efficiency.'
            , tag: 'Systems Integration'
        },
        6: {
            question: 'What is the role of PLC solutions in your offerings?',
            response: 'Programmable Logic Controllers (PLCs) play a crucial role in our solutions, providing automation and control capabilities to optimize processes.'
            , tag: 'PLCs'
        },
        7: {
            question: 'How do you handle maintenance and support after project completion?',
            response: 'We provide ongoing maintenance and support services to address any issues, updates, or modifications needed after the project is completed.'
            , tag: 'Maintenance'
        },
        8: {
            question: 'What sets your company apart from competitors in the tech industry?',
            response: 'Our commitment to innovation, a highly skilled team, and a track record of successful projects set us apart. We prioritize client satisfaction and technological excellence.'
            , tag: 'Competitors'
        }
    }
    return (
        <div>
            <Navbar />
            <div className="FAQ-body">
                <div className="FAQ-header">FAQs</div>
                <div className="FAQ-content">
                    <div className="tags-container">
                        {Object.values(FAQs).map((faq, index) => (
                            <div className="tag" key={index}>
                                <p>{faq.tag}</p>
                            </div>
                        ))}
                    </div>
                    <div className="FAQs">
                        {Object.values(FAQs).map((faq, index) => (
                            <div className="FAQ">
                                <div className="text" key={index}>
                                    <div className="question">{faq.question}</div>
                                    {expanded[index] && (
                                        <div className="response">
                                            {faq.response}
                                        </div>
                                    )}
                                </div>
                                {expanded[index] ? (
                                    <FaMinus className="minus-icon" onClick={() => handleToggle(index)} />
                                ) : (
                                    <FaPlus className="plus-icon" onClick={() => handleToggle(index)} />
                                )}
                            </div>
                        ))}
                    </div>
                </div></div>
            <Footer />
        </div>
    )
}

export default FAQ