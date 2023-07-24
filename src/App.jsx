/* eslint-disable no-unused-vars */
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutTeam from './pages/AboutTeam'
import AboutHackJNU from './pages/AboutHackJNU'
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import Prizes from './pages/Prizes'
import Sponsors from './pages/Sponsors'
import Timeline from './pages/Timeline'
import { ParallaxBanner } from 'react-scroll-parallax'


function App() {

  return (
    // <>
    //   <Parallax pages={5} className='ParallaxBase'>
    //     <ParallaxLayer offset={0}>
    //       <h2 className='m-auto mt-[50vh] Text1 text-3xl'>The greatest hackathon in india</h2>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={0}>
    //       <h2 className='m-auto mt-[50vh] Text2 text-3xl'>Back with a bang</h2>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={0}>
    //       <Navbar></Navbar>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={0}>
    //       <Home></Home>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={1}>
    //       <AboutTeam></AboutTeam>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={2}>
    //       <Timeline></Timeline>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={3}>
    //       <Prizes></Prizes>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={4}>
    //       <Sponsors></Sponsors>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={5}>
    //       <FAQ></FAQ>
    //     </ParallaxLayer>
    //     <ParallaxLayer>
    //       <Footer></Footer>
    //     </ParallaxLayer>
    //   </Parallax>
    // </>
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.77} style={{ top: '0' }}>
          <div className="animation_layer parallax" id="layer-8"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="layer-7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="layer-6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="layer-5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="layer-4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="layer-3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="layer-2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="layer-1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer-0"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div id="textblock">
            <div id="textblock-container">
              <h1 id="textblock-title">Title</h1>
              <p id="textblock-content">

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ratione at exercitationem quos vero error, expedita eos voluptatum temporibus atque numquam recusandae aliquid, vitae distinctio commodi explicabo possimus provident maxime enim eum! Ullam natus porro qui veniam! Et, blanditiis aperiam consequuntur nam id deserunt, nulla quas velit possimus magni saepe suscipit inventore ut dignissimos! Quo, blanditiis suscipit exercitationem provident temporibus numquam officia a laudantium illum esse natus consequuntur nostrum consectetur quibusdam dolorum aliquam quos animi cupiditate odio, cumque, eveniet nihil! Accusantium, fuga tempore libero ratione in iusto et, modi saepe sunt vero magni nobis suscipit voluptatibus eos obcaecati laudantium alias.
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>


  )
}

export default App
