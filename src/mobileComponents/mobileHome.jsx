import Layer1 from "../assets/MobileAssets/Layer1.svg";
import Layer2 from "../assets/MobileAssets/Layer2.svg";
import Layer3 from "../assets/MobileAssets/Layer3.svg";
import Layer4 from "../assets/MobileAssets/Layer4.svg";
import Layer5 from "../assets/MobileAssets/Layer5.svg";
import Layer6 from "../assets/MobileAssets/Layer6.svg";
import Layer7 from "../assets/MobileAssets/Layer7.svg";

import Logo from '../assets/logo.png'
import Countdown from "../components/Countdown";

const MobileHome = () => {
  return (
    <div className="MobileHome" id="MobileHome">
      <div className="Mountains">
        <img src={Layer7} alt="Mountains" className="InDown"/>
        <img src={Layer6} alt="Mountains" className="InDown"/>
        <img src={Layer5} alt="Mountains" className="InDown"/>
        <img src={Layer4} alt="Mountains" className="InDown"/>
        <img src={Layer3} alt="Mountains" className="InDown"/>
        <img src={Layer2} alt="Mountains" className="InDown"/>
        <img src={Layer1} alt="Mountains" className="InDown"/>
      </div>
      <div className="Home">
        <img src={Logo} alt="HackJNU" id="HomeLogo"/>
        <div id="HomeCountdown">
          <Countdown />
        </div>
        <div className="alert">
          <p className="slide">
            <p className="AlertText">Slide to switch page</p>
            <span className="AlertIcon">{">"}</span>
            </p>
          <p className="pcAlert">For full experience of the website , please see the desktop version</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
