import { Parallax } from "react-scroll-parallax";

import '../styles/FooterTrees.css'

import FrontTree from "../assets/FrontTree.svg";
import LeftTree from "../assets/LeftTree.svg";
import BackRightTree from "../assets/BackRightTree.svg";

const FooterTrees = () => {
    return ( 
        <>
        <div className="content">
          <div className="viewport">
          <Parallax
            translateX={["-600px", "0px"]}
            scale={[0.75, 1]}
            easing="easeInQuad"
          >
            <img src={LeftTree} className="w-full"></img>
          </Parallax>
          </div>
        </div>
        <div className="content">
          <div className="viewport">
          <Parallax
            translateX={["600px", "0px"]}
            scale={[0.6, 1]}
            easing="easeInQuad"
          >
            <img src={BackRightTree} className="w-full"></img>
          </Parallax>
          </div>
        </div>
        <div className="content">
          <div className="viewport">
          <Parallax
            translateX={["1000px", "0px"]}
            scale={[0.5, 1]}
            easing="easeInQuad"
          >
            <img src={FrontTree} className="w-full"></img>
          </Parallax>
          </div>
        </div>
      </>
     );
}
 
export default FooterTrees;