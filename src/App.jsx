/* eslint-disable no-unused-vars */
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { useState , useRef , useEffect } from "react";

import { Parallax , useParallaxController } from "react-scroll-parallax";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutTeam from "./pages/AboutTeam";
import AboutHackJNU from "./pages/AboutHackJNU";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";
import Sponsors from "./pages/Sponsors";
import Timeline from "./pages/Timeline";
import DistantForest from "./parallaxes/DistantForest";
import FooterTrees from "./parallaxes/FooterTrees";
import FooterParallax from "./parallaxes/FooterParallax";

import './styles/Parallaxes.css'

function App() {

  const DistantForestParallaxRef = useRef();
  const [DistantForestTarget,setDistantForestTarget]=useState(null);
  const FooterTreesParallaxRef = useRef();
  const [FooterTreesTarget,setFooterTreesTarget]=useState(null);
  const FooterParallaxRef = useRef();
  const [FooterParallaxTarget,setFooterParallaxTarget]=useState(null);
  const [started,setStarted]=useState(0);
  const controller = new useParallaxController();

  useEffect(()=>{
    setDistantForestTarget(DistantForestParallaxRef.current)
    setFooterTreesTarget(FooterTreesParallaxRef.current)
    setFooterParallaxTarget(FooterParallaxRef.current)
    console.log(controller.getElements())
    setStarted(1)
    controller.update()
  },[controller])

  return (
    <>
    <div className="App" id="AppHome">
      <section className="Home pages1">
      <Home />
      </section>
      <div className="SpaceFiller"></div>
      <section className="About pages1">
      <AboutHackJNU></AboutHackJNU>
      </section>
      <div className="SpaceFiller"></div>
      <section className="ParallaxStarter DistantForest">
        <div className="ParallaxDiv">
          <DistantForest targetElement={DistantForestTarget} setStarted={setStarted} started={started}/>
        </div>
      </section>
      <div className="ParallaxTargetContainer">
        <div className="DistantForestTarget ParallaxTarget" ref={DistantForestParallaxRef}></div>
      </div>
      <div className="SpaceFiller"></div>
      <section className="Timeline pages1">
        <Timeline></Timeline>
      </section>
      <div className="SpaceFiller"></div>
      <div className="SpaceFiller"></div>
      <section className="Prizes pages1">
        <Prizes></Prizes>
      </section>
      <section className="ParallaxStarter FooterTrees">
        <div className="ParallaxDiv">
          <FooterTrees targetElement={FooterTreesTarget} setStarted={setStarted} started={started}/>
        </div>
      </section>
      <div className="ParallaxTargetContainer">
        <div className="FooterTreesTarget ParallaxTarget" ref={FooterTreesParallaxRef} ></div>
      </div>
      <div className="SpaceFiller"></div>
      <section className="Sponsors pages1">
        <Sponsors></Sponsors>
      </section>
      <div className="SpaceFiller"></div>
      <section className="ParallaxStarter FooterParallax">
        <div className="ParallaxDiv">
          <FooterParallax targetElement={FooterParallaxTarget} setStarted={setStarted} started={started}/>
        </div>
      </section>
      <div className="ParallaxTargetContainer">
        <div className="FooterParallaxTarget ParallaxTarget" ref={FooterParallaxRef}></div>
      </div>
      <div className="SpaceFiller"></div>
      <section className="FAQ pages1">
        <FAQ></FAQ>
      </section>
    </div>
    <div className="h-[50vh] bg-black">
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
