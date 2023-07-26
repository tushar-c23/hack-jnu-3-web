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
import Countdown from './components/Countdown'
import TimerCard from './components/TimerCard'
import { ParallaxBanner } from 'react-scroll-parallax'
import FooterImg from './assets/FooterImg.svg'
import ForestBack from './assets/ForestBack.svg'
import ForestMid from './assets/ForestMid.svg'
import ForestTop from './assets/ForestTop.svg'


import { useRef , useState , useEffect} from 'react'


function App() {
  const myRef = useRef();
  const myDivRef = useRef();
  const [refStyle,setRefStyle] = useState({transform: `translate(0px)`});
  const getPosition = () => {
    console.log("Scrolled")
    if(myRef.current){
    let h=myRef.current.getBoundingClientRect()['y']+1500
    if (h<0)
    h=0
    setRefStyle({transform: `translate(-${h}px)`})
    console.log(myRef.current)
    }
  };
  useEffect(() => {
    myDivRef.current && myDivRef.current.addEventListener('scroll', getPosition);
  }, []);

  return (
    <div className="App" onWheel={getPosition}>
      <Parallax pages={5} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.0} >
          <div className="animation_layer parallax" id="layer-12"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.0} >
          <div className="animation_layer parallax" id="layer-11"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.0} >
          <div className="animation_layer parallax" id="layer-10"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.0} >
          <div className="animation_layer parallax" id="layer-9"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.0} >
          <div className="animation_layer parallax" id="layer-8"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.05}>
          <div className="animation_layer parallax" id="layer-7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="layer-6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation_layer parallax" id="layer-5"></div>
        </ParallaxLayer> 
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="layer-4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="layer-3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="layer-2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer-1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="layer-0"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <Countdown />
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
        <ParallaxLayer offset={1} speed={0.1} >
          <img src={ForestBack} alt="" ref={myRef} style={refStyle}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} >
          <img src={ForestMid} alt="" style={refStyle}/>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
