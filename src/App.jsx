/* eslint-disable no-unused-vars */
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { useState, useRef, useEffect } from "react";

import { Parallax, useParallaxController } from "react-scroll-parallax";
import "./App.css";
import "./styles/AboutTeam.css";
import "./styles/Prizes.css";
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
  // Parallax variables here
  const DistantForestParallaxRef = useRef();
  const [DistantForestTarget, setDistantForestTarget] = useState(null);
  const FooterTreesParallaxRef = useRef();
  const [FooterTreesTarget, setFooterTreesTarget] = useState(null);
  const FooterParallaxRef = useRef();
  const [FooterParallaxTarget, setFooterParallaxTarget] = useState(null);
  const FAQParallaxRef = useRef();
  const [FAQParallaxTarget, setFAQParallaxTarget] = useState(null);
  const [started, setStarted] = useState(0);
  const controller = new useParallaxController();

  // Intersection observer Refs here
  const LandingRef = useRef()
  const AboutRef = useRef()
  const TimelineRef = useRef()
  const SponsorsRef = useRef()
  const PrizesRef = useRef()
  const FAQRef = useRef()
  const FooterRef = useRef()

  const [headingNumber, setHeadingNumber] = useState(0)

  useEffect(() => {
    // Setting Parallax target refs here
    setDistantForestTarget(DistantForestParallaxRef.current)
    setFooterTreesTarget(FooterTreesParallaxRef.current)
    setFooterParallaxTarget(FooterParallaxRef.current)
    setFAQParallaxTarget(FAQParallaxRef.current)
    console.log(FAQParallaxRef.current)
    setStarted(1)
    controller.update()

    // Intersection Observers here

    const NavObserver = new IntersectionObserver(NavHandler)
    const HeadingObserver = new IntersectionObserver(HeadingHandler, {
      threshold: 0.5
    })
    const ContentObserver = new IntersectionObserver(ContentHandler, {
      threshold: 0.5,
      rootMargin: "-100px"
    })

    NavObserver.observe(LandingRef.current)
    HeadingObserver.observe(AboutRef.current)
    HeadingObserver.observe(TimelineRef.current)
    HeadingObserver.observe(SponsorsRef.current)
    HeadingObserver.observe(PrizesRef.current)
    HeadingObserver.observe(FAQRef.current)

    const content = document.querySelectorAll('.animatedContent')

    console.log(content)
    content.forEach((contentEntry) => {
      ContentObserver.observe(contentEntry)
      console.log(contentEntry)
    }
    )
    console.log(ContentObserver)

  }, [controller])

  const NavHandler = function (entries) {
    document.getElementById('NavBar').classList.toggle("show", !entries[0].isIntersecting)
  }
  const HeadingHandler = function (entries) {
    if (entries[0].target.id === "About")
      setHeadingNumber(0)
    else if (entries[0].target.id === "Timeline")
      setHeadingNumber(1)
    else if (entries[0].target.id === "Prizes")
      setHeadingNumber(2)
    else if (entries[0].target.id === "Sponsors")
      setHeadingNumber(3)
    else if (entries[0].target.id === "FAQ")
      setHeadingNumber(4)
  }
  const ContentHandler = function (entries) {
    console.log(entries)
    entries.map((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  }

  return (
    <>
      <div className="App" id="AppHome">
        <section className="Home" ref={LandingRef} id="Home">
          <Home />
        </section>
        <div className="NavBar" id="NavBar">
          <Navbar current={headingNumber} ></Navbar>
        </div>
        <div className="h-[30vh]"></div>
        <section className="About pages1" ref={AboutRef} id="About">
          <AboutHackJNU></AboutHackJNU>
        </section>
        <div className="h-[10vh]"></div>
        <section className="ParallaxStarter DistantForest">
          <div className="ParallaxDiv">
            <DistantForest targetElement={DistantForestTarget} setStarted={setStarted} started={started} />
          </div>
        </section>
        <div className="ParallaxTargetContainer">
          <div className="DistantForestTarget ParallaxTarget" ref={DistantForestParallaxRef}></div>
        </div>
        <section className="Timeline pages1" ref={TimelineRef} id="Timeline">
          <Timeline></Timeline>
        </section>
        <div className="h-[20vh]"></div>
        <section className="Prizes pages1" ref={PrizesRef} id="Prizes">
          <Prizes></Prizes>
        </section>
        
        <div className="h-[10vh]"></div>
        <section className="Sponsors pages1" ref={SponsorsRef} id="Sponsors">
          <Sponsors></Sponsors>
        </section>
        {/* <div className="SpaceFiller"></div> */}
        <section className="ParallaxStarter FooterTrees">
          <div className="ParallaxDiv">
            <FooterTrees targetElement={FooterTreesTarget} setStarted={setStarted} started={started} />
          </div>
        </section>
        <div className="ParallaxTargetContainer">
          <div className="FooterTreesTarget ParallaxTarget" ref={FooterTreesParallaxRef} ></div>
        </div>
        <div className="SpaceFiller"></div>
        <section className="FAQ pages1  " ref={FAQRef} id="FAQ">
          <Parallax 
          translateY={["-1200px", "0px"]}
          opacity={["0","1"]}
          targetElement={FAQParallaxTarget}>
          <FAQ></FAQ>
          </Parallax>
          <div className=""></div>
        <div className="ParallaxTargetContainer h-1">
          <div className="FAQParallaxTarget ParallaxTarget" ref={FAQParallaxRef}></div>
        </div>   
        </section>
        <section className="ParallaxStarter FooterParallax">
          <div className="ParallaxDiv">
            <FooterParallax targetElement={FooterParallaxTarget} setStarted={setStarted} started={started} />
          </div>
        </section>
        <div className="ParallaxTargetContainer">
          <div className="FooterParallaxTarget ParallaxTarget" ref={FooterParallaxRef}></div>
        </div>
        <div className="h-[50vh]"></div>
        <div className="SpaceFiller"></div>
      </div>
        
      <div className="h-[50vh] bg-black" ref={FooterRef} id="Footer">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;