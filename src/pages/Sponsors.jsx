import GoogleLogo from '../assets/GoogleLogo.png'
import '../styles/Sponsors.css'
const Sponsors = () => {
    return ( <div className='SponsorsBox '>
        <div className="SponsorsText">A Special Thanks to:</div>
        <div className="SponsorsLogos animatedContent">
            <div className="company">
                <div className="companyLogo">
                    <img src={GoogleLogo} alt="Google.co" />
                </div>
            </div>
            <div className="company">
                <div className="companyLogo">
                    <img src={GoogleLogo} alt="Google.co" />
                </div>
            </div>
            <div className="company">
                <div className="companyLogo">
                    <img src={GoogleLogo} alt="Google.co" />
                </div>
            </div>
            <div className="company">
                <div className="companyLogo">
                    <img src={GoogleLogo} alt="Google.co" />
                </div>
            </div>
            <div className="company">
                <div className="companyLogo">
                    <img src={GoogleLogo} alt="Google.co" />
                </div>
            </div>
        </div>
            <div className="SponsorsText">Our Wonderful Sponsors</div>
    </div> );
}
 
export default Sponsors;