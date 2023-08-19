/* eslint-disable react/prop-types */
import { Parallax } from "react-scroll-parallax";

import FooterImg from "../assets/FooterImg.svg";

const FooterParallax = (props) => {
  return (
    <Parallax
      translateY={["400px", "150px"]}
      scale={[2, 1]}
      easing="easeInQuad"
      className="Parallax"
      targetElement={props.targetElement}
      onEnter={()=>{props.setStarted(4)}}
      >
      <img src={FooterImg} className="w-full"></img>
    </Parallax>
  );
};

export default FooterParallax;
