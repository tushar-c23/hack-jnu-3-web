const MobileAbout = () => {
  return (
    <div className="MobileAbout" id="MobileAbout">
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
            Registration will be handled using DevFolio , Follow this{" "}
            <a href="#" className="text-pink-100">
              Link to registration
            </a>
          </div>
        </div>
        <div className="Box inLeft">
          <div className="AboutBox-title">
            <span className="heavy">Who </span>
            All Can Register?
          </div>
          <div className="AboutBox-Content">
            College students from all over India pursuing Engineeering can
            register for the Hackkathon
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
