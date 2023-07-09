/* eslint-disable no-unused-vars */
import { Parallax , ParallaxLayer } from '@react-spring/parallax'
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


function App() {

  return (
    <>
      <Parallax pages={5} className='ParallaxBase'>
        <ParallaxLayer offset={0}>
          <h2 className='m-auto mt-[50vh] Text1 text-3xl'>The greatest hackathon in india</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <h2 className='m-auto mt-[50vh] Text2 text-3xl'>Back with a bang</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <Navbar></Navbar>
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <Home></Home>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <AboutHackJNU></AboutHackJNU>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Timeline></Timeline>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Prizes></Prizes>
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <Sponsors></Sponsors>
        </ParallaxLayer>
        <ParallaxLayer offset={5}>
          <FAQ></FAQ>
        </ParallaxLayer>
        <ParallaxLayer>
          <Footer></Footer>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App
