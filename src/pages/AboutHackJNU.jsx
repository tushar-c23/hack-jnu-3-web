import "../styles/About.css";
import { Helmet } from "react-helmet";
const AboutHackJNU = () => {
  return (
    <div>
      <Helmet>
        <title>HackJNU | About</title>
        <meta
          name="description"
          content="About HackJNU 3.0, a 24 hour offline hackathon organised by Jawaharlal Nehru University"
        />
      </Helmet>
      <div className="cardset-body flex flex-row w-3/4 mx-auto h-auto animatedContent">
        <div className="cardset w-1/3 flex">
          <div className="cardSpace">
            <div className="card h-full w-full">
              <div className="card-body">
                <div className="card-title ">
                  <span className="heavy">WHAT </span>
                  is HackJNU?
                </div>
                <div className="card-text">
                  HackJNU is a national hackathon arranged by one of the top
                  universities in India , The Jawaharlal Nehru University .
                  After the immense success of HackJNU and HackJNU 2.0 , we are
                  back in game with HackJNU3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardset w-2/3 flex flex-wrap">
          <div className="cardSpace w-full">
            <div className="card w-full h-full">
              <div className="card-body">
                <div className="card-title">
                  <span className="heavy">How </span>
                  Can I Register?
                </div>
                <div className="card-text">
                  Registration is live on DevFolio.
                  <br />
                  <div
                    className="apply-button"
                    data-hackathon-slug="hackjnu-3"
                    data-button-theme="dark"
                    style={{height: "44px", width: "312px"}}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardSpace w-1/2">
            <div className="card w-full h-full">
              <div className="card-body">
                <div className="card-title">
                  <span className="heavy">Who </span>
                  All Can Register?
                </div>
                <div className="card-text">
                  College students from all over India pursuing any graduation
                  degree can register for this Hackathon
                </div>
              </div>
            </div>
          </div>
          <div className="cardSpace w-1/2">
            <div className="card w-full h-full">
              <div className="card-body">
                <div className="card-title">
                  <span className="heavy">Where </span>
                  will it be held?
                </div>
                <div className="card-text">
                  HackJNU will be held Offline at the{" "}
                  <a href="#" className="card-link">
                    Convention Centre, JNU
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHackJNU;
