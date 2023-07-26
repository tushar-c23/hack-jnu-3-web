import '../styles/Home.css'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import MountainsLayer0 from '../img/MountainsLayer0.svg'
import MountainsLayer1 from '../img/MountainsLayer1.svg'
import MountainsLayer2 from '../img/MountainsLayer2.svg'
import MountainsLayer3 from '../img/MountainsLayer3.svg'
import MountainsLayer4 from '../img/MountainsLayer4.svg'
import MountainsLayer5 from '../img/MountainsLayer5.svg'
import MountainsLayer6 from '../img/MountainsLayer6.svg'
import MountainsLayer7 from '../img/MountainsLayer7.svg'
import MountainsLayer8 from '../img/MountainsLayer8.svg'
import MountainsLayer9 from '../img/MountainsLayer9.svg'
import MountainsLayer10 from '../img/MountainsLayer10.svg'
import MountainsLayer11 from '../img/MountainsLayer11.svg'
import MountainsLayer12 from '../img/MountainsLayer12.svg'

const Home = () => {
    return ( <div className='Home'>
        <ParallaxBanner className='HomeBanner'>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer12} speed={-52}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer11} speed={-48}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer10} speed={-40}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer9} speed={-36}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer8} speed={-32}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer7} speed={-28}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer6} speed={-24}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer5} speed={-20}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer4} speed={-16}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer3} speed={-12}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer2} speed={-8}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer1} speed={-4}></ParallaxBannerLayer>
            <ParallaxBannerLayer className='ParallaxBannerLayer' image={MountainsLayer0} speed={0}></ParallaxBannerLayer>
        </ParallaxBanner>
    </div> );
}
 
export default Home;