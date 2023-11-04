// import Logo from '../assets/logo.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="FooterBox">
      <div className="FooterContent ">
        <div className="FootTitle">Follow us for more at:</div>
        <div className="icons mb-8 mt-4">
          <a href="#">
            <GitHubIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </div>
        <p>
          {/* Know More about the <a href="#">team behind HackJNU</a> */}
          Reach out to us at:
          <br />
           <a href="mailto:contactus@hackjnu.tech">contactus@hackjnu.tech</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
