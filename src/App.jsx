/* eslint-disable no-unused-vars */
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Parallax } from "react-scroll-parallax";
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

function App() {

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
      <section className="ParaDiv DistantForest">
          <DistantForest />
      </section>
      <div className="SpaceFiller"></div>
      <section className="Timeline pages1">
        <Timeline></Timeline>
      </section>
      <div className="SpaceFiller"></div>
      <div className="SpaceFiller"></div>
      <section className="Prizes pages1">
        <Prizes></Prizes>
      </section>
      <section className="ParaDiv FooterTrees">
          <FooterTrees />
      </section>
      <div className="SpaceFiller"></div>
      <section className="Sponsors pages1">
        <Sponsors></Sponsors>
      </section>
      <div className="SpaceFiller"></div>
      <section className="ParaDiv FooterParallax">
          <FooterParallax />
      </section>
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