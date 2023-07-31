import { Parallax } from "react-scroll-parallax";
import '../styles/DistantForest.css'

import BgForestLeftL1 from "../assets/BgForest/BgForestLeftL1.svg";
import BgForestLeftL2 from "../assets/BgForest/BgForestLeftL2.svg";
import BgForestLeftL3 from "../assets/BgForest/BgForestLeftL3.svg";
import BgForestRightL1 from "../assets/BgForest/BgForestRightL1.svg";
import BgForestRightL2 from "../assets/BgForest/BgForestRightL2.svg";
import BgForestRightL3 from "../assets/BgForest/BgForestRightL3.svg";

const DistantForest = () => {
  return (
    <>
      <div className="content">
        <div className="viewport">
          <Parallax
            translateX={["-600px", "0px"]}
            opacity={[1, 0.5]}
            easing="easeInQuad"
          >
            <img src={BgForestLeftL1} className="w-full"></img>
          </Parallax>
        </div>
      </div>
      <div className="content">
        <div className="viewport">
          <Parallax
            opacity={[1, 0.5]}
            translateX={["600px", "0px"]}
            easing="easeInQuad"
          >
            <img src={BgForestRightL1} className="w-full"></img>
          </Parallax>
        </div>
      </div>
      <div className="content">
        <div className="viewport">
          <Parallax
            opacity={[1, 0.75]}
            translateX={["-1400px", "0px"]}
            easing="easeInQuad"
          >
            <img src={BgForestLeftL2} className="w-full"></img>
          </Parallax>
        </div>
      </div>
      <div className="content">
        <div className="viewport">
          <Parallax
            opacity={[1, 0.75]}
            translateX={["1400px", "0px"]}
            easing="easeInQuad"
          >
            <img src={BgForestRightL2} className="w-full"></img>
          </Parallax>
        </div>
      </div>
      <div className="content">
        <div className="viewport">
          <Parallax
            opacity={[1, 0.9]}
            translateX={["-2000px", "0px"]}
            easing="easeInQuad"
          >
            <img src={BgForestLeftL3} className="w-full"></img>
          </Parallax>
        </div>
      </div>
      <div className="content">
        <div className="viewport">
          <Parallax
            opacity={[1, 0.9]}
            translateX={["2000px", "0px"]}
            easing="easeInQuad"
          >
            <img src={BgForestRightL3} className="w-full"></img>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default DistantForest;
