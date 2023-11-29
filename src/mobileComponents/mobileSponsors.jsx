import FrontTree from "../assets/MobileAssets/mobileFooterTree.svg";
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
        <div className="company Gold">
          <div className="companyLogo DevFolio Gold">
            <a href="https://devfolio.co/">
              <img src={DevFolioLogo} alt="DEVFOLIO LOGO" />
            </a>
          </div>
        </div>
        <div className="company Gold">
          <div className="companyLogo Polygon Gold">
            <a href="https://polygon.technology/">
              <img src={PolygonLogo} alt="POLYGON LOGO" />
            </a>
          </div>
        </div>
        <div className="SponsorBreak" />
        <div className="company Silver">
          <div className="companyLogo Replit Silver">
            <a href="https://replit.com/">
              <img src={ReplitLogo} alt="REPLIT LOGO" />
            </a>
          </div>
        </div>
        <div className="SponsorBreak" />
        <div className="company Bronze JDoodle">
          <div className="companyLogo JDoodle Bronze">
            <a href="https://www.jdoodle.com/?utm_source=HackJNU&utm_medium=Event&utm_campaign=Hackathon+Sponsorship">
              <img src={JDoodleLogo} alt="JDoodle LOGO" />
            </a>
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
