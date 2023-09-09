const Prizes = () => {
  return (
    <div className="prizes-section">
      <div className="prizes-info">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          molestias.
        </h1>
      </div>
      <div className="prize-cards">
        <div class="prizeCard red">
          <div className="number">
            <h1 className="tip">2nd</h1>
          </div>
          <div className="trophy">
            <img src="../../trophy.svg" alt="" />
          </div>
          <div className="reward">
            <p className="second-text">50 Thousand rupees</p>
          </div>
        </div>
        <div className="prizeCard blue">
          <div className="number">
            <h1 className="tip">1st</h1>
          </div>
          <div className="trophy">
            <img src="../../trophy.svg" alt="" />
          </div>
          <div className="reward">
            <p className="second-text">1 Lakh Rupees</p>
          </div>
        </div>
        <div className="prizeCard green">
          <div className="number">
            <h1 className="tip">3rd</h1>
          </div>
          <div className="trophy">
            <img src="../../trophy.svg" alt="" />
          </div>
          <div className="reward">
            <p className="second-text">25 thousand Rupees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
