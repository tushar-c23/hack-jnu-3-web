/* eslint-disable react/prop-types */
import { Parallax } from "react-scroll-parallax";

import FrontTree from "../assets/FrontTree.svg";
import LeftTree from "../assets/LeftTree.svg";
import BackRightTree from "../assets/BackRightTree.svg";

const FooterTrees = (props) => {
  return (
    <>
      <Parallax
        translateX={["-600px", "0px"]}
        translateY={["0px","100px"]}
        scale={[0.75, 1]}
        easing="easeInQuad"
        className="Parallax"
        targetElement={props.targetElement}
        onEnter={()=>{props.setStarted(3),
        console.log("hello")}}
      >
        <img src={LeftTree} className="w-full"></img>
      </Parallax>
      <Parallax
        translateX={["600px", "0px"]}
        scale={[0.6, 1]}
        easing="easeInQuad"
        className="Parallax"
        targetElement={props.targetElement}
      >
        <img src={BackRightTree} className="w-full"></img>
      </Parallax>
      <Parallax
        translateX={["1000px", "0px"]}
        scale={[0.65, 1]}
        easing="easeInQuad"
        className="Parallax"
        targetElement={props.targetElement}
      >
        <img src={FrontTree} className="w-full"></img>
      </Parallax>
    </>
  );
};

export default FooterTrees;
