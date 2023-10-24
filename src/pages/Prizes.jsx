import Trophy from '../assets/trophy.svg'
import Trophy1 from '../assets/trophy1.svg'

const Prizes = () => {
  return (
    <div className="prizes-section">
      <div className="prizes-info">
        <h2>
          Compete for exciting Prizes
        </h2>
      </div>
      <div className="prize-cards">
        <div className="prizeCard not-first">
          <div className="number">
            <h1 className="tip">2nd</h1>
          </div>
          <div className="trophy">
            <img src={Trophy} alt="" />
          </div>
          <div className="reward">
            <p className="second-text">Cash Prize: ₹20000</p>
          </div>
        </div>
        <div className="prizeCard first">
          <div className="number">
            <h1 className="tip">1st</h1>
          </div>
          <div className="trophy">
            <img src={Trophy1} alt="" />
          </div>
          <div className="reward">
            <p className="second-text">Cash Prize: ₹30000</p>
          </div>
        </div>
        <div className="prizeCard not-first">
          <div className="number">
            <h1 className="tip">3rd</h1>
          </div>
          <div className="trophy">
            <img src={Trophy} alt="" />
          </div>
          <div className="reward">
            <p className="second-text">Cash Prize: ₹10000</p>
          </div>
        </div>
      </div>
      <div className="prizes-info">
        <h4>
          All qualifying teams get participation certificates , swags and more
        </h4>
      </div>
    </div>
  );
};

export default Prizes;
