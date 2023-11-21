import ForestLayer1 from '../assets/MobileAssets/ForestLayer1.svg'

const MobileAbout = () => {
  return (
    <div className="MobileAbout" id="MobileAbout">
      <div className="background ForestLayer1">
        <img src={ForestLayer1} alt="trees?" />
      </div>
      <div className="AboutBoxes">
        <div className="Box inLeft">
          <div className="AboutBox-title">
            <span className="heavy">WHAT </span>is HackJNU?
          </div>
          <div className="AboutBox-content">
            HackJNU is a hackathon arranged by one of the top universities in
            India , The Jawaharlal Nehru University
          </div>
        </div>
        <div className="Box inRight">
          <div className="AboutBox-title">
            <span className="heavy">How </span>
            Can I Register?
          </div>
          <div className="AboutBox-Content">
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
        <div className="Box inLeft">
          <div className="AboutBox-title">
            <span className="heavy">Who </span>
            All Can Register?
          </div>
          <div className="AboutBox-Content">
            College students from all over India pursuing Engineering can
            register for the Hackathon
          </div>
        </div>
        <div className="Box inRight">
          <div className="AboutBox-title">
            <span className="heavy">Where </span>
            Will it be held?
          </div>
          <div className="AboutBox-Content">
            HackJNU will be held at{" "}
            <a href="#" className="text-pink-100">
              Convention Centre , JNU
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;
