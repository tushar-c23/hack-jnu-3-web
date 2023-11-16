import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MobileFooter = () => {
    return ( 
        <div className="FooterBox">
      <div className="FooterContent ">
        <div className="FootTitle">Follow us for more at:</div>
        <div className="icons mb-8 mt-4">
          <a href="https://github.com/tushar-c23/hack-jnu-3-web" alt="Hack JNU 3.0 Github Repository">
            <GitHubIcon />
          </a>
          <a href="https://www.instagram.com/hackjnu3.0" alt="@hackjnu3.0 on Instagram">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/hackjnu3" alt="@hackjnu3 on X(Twitter)">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/company/hackjnu-3-0/about/" alt="Hack JNU 3.0 on LinkedIn">
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
}
 
export default MobileFooter;