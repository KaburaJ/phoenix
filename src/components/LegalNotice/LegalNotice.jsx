import React from "react"
import '../LegalNotice/LegalNotice.css'
import Navbar from "../../common/Navbar/Navbar"
import Footer from "../../common/footer/Footer"

const LegalNotice = () => {
    return (
        <div className="legal-main-container">
            <Navbar />
            <div className="legal-body">
                <div className='legal-header'>Legal Notice</div>
                <div className='legal-content' style={{ width: '100%', height: '100%' }}><span style={{ color: 'black', fontFamily: 'Inter', wordWrap: 'break-word' }}>This Legal Notice governs the use of the website and services provided by Phoenix Technologies. By accessing or using our website and services, you agree to comply with and be bound by the terms of this Legal Notice. If you do not agree with these terms, please refrain from using our website and services.
                    <br />
                    <br /></span><span style={{ color: '#008000', fontFamily: 'Inter', wordWrap: 'break-word' }}>Intellectual Property:</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '400px', wordWrap: 'break-word' }}> All content, logos, trademarks, and other intellectual property on our website are the property of Phoenix Technologies and are protected by intellectual property laws. You agree not to reproduce, distribute, modify, or create derivative works from any content on our website without our prior written consent.
                        <br />
                        <br /></span><span style={{ color: '#008000', fontFamily: 'Inter', wordWrap: 'break-word' }}>Disclaimer of Warranties:</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '400px', wordWrap: 'break-word' }}> The information on our website is provided "as is" and "as available" without any warranties, either expressed or implied. We do not guarantee the accuracy, completeness, or reliability of the content on our website. Your use of our website is at your own risk.
                        <br />
                        <br /></span><span style={{ color: '#008000', fontFamily: 'Inter', wordWrap: 'break-word' }}>Limitation of Liability:</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '400px', wordWrap: 'break-word' }}> To the fullest extent permitted by law,   Phoenix Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of our website or services.
                        <br />
                        <br /></span><span style={{ color: '#008000', fontFamily: 'Inter', wordWrap: 'break-word' }}>Third-Party Links:</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '400px', wordWrap: 'break-word' }}> Our website may contain links to third-party websites. These links are provided for your convenience, and  Phoenix Technologies has no control over the content of these linked websites. We are not responsible for the content or accuracy of any third-party websites linked to our website.
                        <br />
                        <br /></span><span style={{ color: '#008000', fontFamily: 'Inter', wordWrap: 'break-word' }}>Privacy:</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '400px', wordWrap: 'break-word' }}> Your use of our website is also governed by our Privacy Policy. By using our website, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.
                        <br />
                        <br /></span><span style={{ color: '#008000', fontFamily: 'Inter', wordWrap: 'break-word' }}>Changes to Terms:</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '400px', wordWrap: 'break-word' }}> Phoenix Technologies reserves the right to update or modify this Legal Notice at any time without prior notice. It is your responsibility to review this Legal Notice periodically. Your continued use of our website and services after any changes to this Legal Notice constitutes your acceptance of those changes.
                        <br />
                        <br /></span><span style={{ color: '#008000', fontFamily: 'Inter', wordWrap: 'break-word' }}>Governing Law:</span><span style={{ color: 'black', fontFamily: 'Inter', fontWeight: '400px', wordWrap: 'break-word' }}> This Legal Notice is governed by and construed in accordance with the laws of Kenya. Any disputes arising under or in connection with this Legal Notice shall be subject to the exclusive jurisdiction of the courts located in Kenya.
                        <br />
                        <br />If you have any questions or concerns about this Legal Notice, please contact us at info@phoenix.co.ke.
                        <br />
                        <br />Thank you for using Phoenix Technologies’ website and services!</span></div>
            </div>
            <Footer />
        </div>
    )
}

export default LegalNotice