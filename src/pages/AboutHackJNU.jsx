import "../styles/About.css";

const AboutHackJNU = () => {
  return (
    <div>
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
                  HackJNU is a hackathon arranged by one of the top universities
                  in India , The Jawaharlal Nehru University
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
                Registration will be handled using DevFolio , Follow this <a href="#" className="text-pink-100">Link to registration</a> 
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
                  College students from all over India pursuing Engineeering can register for the Hackkathon
                </div>
              </div>
            </div>
          </div>
          <div className="cardSpace w-1/2">
            <div className="card w-full h-full">
              <div className="card-body">
                <div className="card-title">
                <span className="heavy">Where </span>
                  Will it be held?
                </div>
                <div className="card-text">
                  HackJNU will be held at <a href="#" className="text-pink-100">Convention Centre , JNU</a>
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
