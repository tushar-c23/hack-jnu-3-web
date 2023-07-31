import { Parallax } from "react-scroll-parallax";

import '../styles/Footer.css'

import FooterImg from "../assets/FooterImg.svg";


const FooterParallax = () => {
    return ( 
        <div className="content">
          <div className="viewport">
          <Parallax
            translateY={["400px", "0px"]}
            scale={[2,1]}
            easing="easeInQuad"
          >
            <img src={FooterImg} className="w-full"></img>
          </Parallax>
          </div>
        </div>
     );
}
 
export default FooterParallax;