import logo from './assets/logo.png';
import location from './assets/location.png';

import facebook from './assets/facebook.png';
import gmail from './assets/gmail.png';
import message from './assets/message.png';

function Footer() {
    return (
        <>
            <div className="footerContainer">
                <hr className="line" />
                <img 
                    src={logo}
                    alt="" 
                    className="footerLogo" 
                />
                <button className="feedback">
                    Send us Feedback
                </button>
                <div className="locationContainer">
                    <div className="locationFlex">
                        <img 
                            src={location}
                            alt=""
                            className="locationImage" 
                        />
                        <p>Ground Floor, <br /> Balagtas town center</p>
                    </div>
                </div>
                <div className="linkContainer">
                    <a href="">
                        About Us
                    </a>
                    <a href="">
                        Get Help
                    </a>
                    <a href="">
                        Contact Us:
                    </a>
                </div>
                <div className="contactContainer">
                    <div className="contactLogoContainer">
                        <img 
                            src={facebook} 
                            alt="" 
                            className="contactLogo"
                        />
                        <img 
                            src={gmail} 
                            alt="" 
                            className="contactLogo"
                        />
                        <img 
                            src={message} 
                            alt="" 
                            className="contactLogo"
                        />
                    </div>
                </div>
                <div className="copyright">
                    © 2025 Mrs. P, All rights reserved
                </div>
            </div>
        </>
    )
}

export default Footer;