import Trophy from "../assets/trophy.svg";
import Trophy1 from "../assets/trophy1.svg";
import FrontTree from '../assets/MobileAssets/mobileFooterTree.svg'
const MobilePrizes = () => {
  return (
    <div className="MobilePrizes" id="MobilePrizes">
      <div className="background MobileFrontTree">
        <img src={FrontTree} alt="tree?" />
      </div>
      <div className="MobilePrizesSection">
        <p className="PrizesTitle">Compete for exciting Prizes</p>
        <div className="MobilePrizeCards">
          <div className="MobilePrizeCard firstCard">
            <div className="textbox">
            <h2 className="MainText">First Place</h2>
            <h3 className="SubText">Exciting Cash Prizes !</h3>
            </div>
            <div className="TrophyImgDiv">
            <img className="trophyImg" src={Trophy1} alt="Trophy" />
            </div>
          </div>
          <div className="MobilePrizeCard secondCard">
          <div className="textbox">
            <h2 className="MainText">Second Place</h2>
            <h3 className="SubText">Exciting Cash Prizes !</h3>
            </div>
            <div className="TrophyImgDiv">
            <img className="trophyImg" src={Trophy} alt="Trophy" />
            </div>
          </div>
          <div className="MobilePrizeCard thirdCard">
          <div className="textbox">
            <h2 className="MainText">Third Place</h2>
            <h3 className="SubText">Exciting Cash Prizes !</h3>
            </div>
            <div className="TrophyImgDiv">
            <img className="trophyImg" src={Trophy1} alt="Trophy" />
            </div>
          </div>
        </div>
        <h4 className="PrizesSubTitle">
          All qualifying teams get participation certificates , swags and more
        </h4>
      </div>
    </div>
  );
};

export default MobilePrizes;
