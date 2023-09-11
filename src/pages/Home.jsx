import "../styles/Home.css";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import MountainsLayer0 from "../img/MountainsLayer0.svg";
import MountainsLayer1 from "../img/MountainsLayer1.svg";
import MountainsLayer2 from "../img/MountainsLayer2.svg";
import MountainsLayer3 from "../img/MountainsLayer3.svg";
import MountainsLayer4 from "../img/MountainsLayer4.svg";
import MountainsLayer5 from "../img/MountainsLayer5.svg";
import MountainsLayer6 from "../img/MountainsLayer6.svg";
import MountainsLayer7 from "../img/MountainsLayer7.svg";
import MountainsLayer8 from "../img/MountainsLayer8.svg";
import MountainsLayer9 from "../img/MountainsLayer9.svg";
import MountainsLayer10 from "../img/MountainsLayer10.svg";
import MountainsLayer11 from "../img/MountainsLayer11.svg";
import MountainsLayer12 from "../img/MountainsLayer12.svg";
import Background from "../img/Background.svg";

import TimerCard from '../components/Countdown'

const Home = () => {
  let speedMult;
  if(screen.width>=1150){
    speedMult=5;
  }
  else{
    speedMult=0;
  }
  return (
    <div className="HomePage">
      <ParallaxBanner className="HomeBanner">
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={0*speedMult}>
          <img src={Background} alt="" className="MountainLayer" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-5*speedMult}>
          <img src={MountainsLayer12} alt="" className="MountainLayer mt-[5.625vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-5*speedMult}>
          <img src={MountainsLayer11} alt="" className="MountainLayer mt-[4.5vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-4*speedMult}>
          <img src={MountainsLayer10} alt="" className="MountainLayer mt-[4.5vw%]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-3*speedMult}>
          <img src={MountainsLayer9} alt="" className="MountainLayer mt-[3.375vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-2*speedMult}>
          <img src={MountainsLayer8} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-1*speedMult}>
          <img src={MountainsLayer7} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-5*speedMult}>
          <img src={MountainsLayer6} alt="" className="MountainLayer HomeLogoSVG" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={1*speedMult}>
          <img src={MountainsLayer5} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={2*speedMult}>
          <img src={MountainsLayer4} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-2*speedMult}>
          <div className="TimerCardGap"></div>
          <TimerCard days={10} hours={20} minutes={10} second={5}></TimerCard>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={3*speedMult}>
          <img src={MountainsLayer3} alt="" className="MountainLayer mt-[3.375vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={4*speedMult}>
          <img src={MountainsLayer2} alt="" className="MountainLayer mt-[4.5vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={5*speedMult}>
          <img src={MountainsLayer1} alt="" className="MountainLayer mt-[5.625vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={6*speedMult}>
          <img src={MountainsLayer0} alt="" className="MountainLayer mt-[6.75vw]" />
          <div className="spaceFiller"></div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
};

export default Home;
