import FrontTree from '../assets/MobileAssets/mobileFooterTree.svg'
import DevFolioLogo from "../assets/SponsorLogos/Devfolio_Logo-White.png";
import PolygonLogo from "../assets/SponsorLogos/Polygon_Logo-White.png";
import ReplitLogo from "../assets/SponsorLogos/Replit-Dark-Background.png";
import JDoodleLogo from "../assets/SponsorLogos/JDoodle.png";
const MobileSponsors = () => {
  return (
    <div className="MobileSponsors" id="MobileSponsors">
      <div className="background MobileFrontTree">
        <img src={FrontTree} alt="tree?" />
      </div>
        <div className="MobileSponsorsText">A Special Thanks to:</div>
        <div className="MobileSponsorsLogos flex justify-center items-center">
          {/* <h1 className="MobileSponsorsProxyText">* Sponsors to be revealed soon*</h1> */}
          <div className="company">
                <div className="companyLogo DevFolio Gold">
                    <img src={DevFolioLogo} alt="DEVFOLIO LOGO" />
                </div>
            </div>
            <div className="company">
                <div className="companyLogo Polygon Gold">
                    <img src={PolygonLogo} alt="POLYGON LOGO" />
                </div>
            </div>
            <div className="company">
                <div className="companyLogo Replit Silver">
                    <img src={ReplitLogo} alt="REPLIT LOGO" />
                </div>
            </div>
            <div className="company">
          <div className="companyLogo JDoodle Bronze">
            <img src={JDoodleLogo} alt="JDoodle LOGO" />
          </div>
        </div>
          <div className="MobileSponsorsApply">
            <p>
              You can be here too!{" "}
              <a href="https://drive.google.com/file/d/1xJXNT_By-lZD2uKvHYCqHqeqD6fF3CNM/view">
                Learn More
              </a>
            </p>
            <p>
              Have a question? Ask Us!{" "}
              <a href="mailto:sponsor@hackjnu.tech">sponsor@hackjnu.tech</a>
            </p>
          </div>
        </div>

        <div className="MobileSponsorsText">For making this possible</div>
    </div>
  );
};

export default MobileSponsors;
