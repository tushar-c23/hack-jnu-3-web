import GoogleLogo from "../assets/GoogleLogo.png";
import "../styles/Sponsors.css";
const Sponsors = () => {
  return (
    <div className="SponsorsBox ">
      <div className="SponsorsText">A Special Thanks to:</div>
      <div className="SponsorsLogos animatedContent">
        {/* <div className="company">
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
            </div> */}

        <h1 className="SponsorsProxyText">* Sponsors to be revealed soon*</h1>

        <div className="SponsorsApply">
        <p>You can be here too! <a href="https://drive.google.com/file/d/1xJXNT_By-lZD2uKvHYCqHqeqD6fF3CNM/view">Learn More</a></p>
        <p>Have a question? Ask Us! <a href="mailto:sponsor@hackjnu.tech">sponsor@hackjnu.tech</a></p>
      </div>
      </div>

      <div className="SponsorsText">For making this possible</div>
    </div>
  );
};

export default Sponsors;
