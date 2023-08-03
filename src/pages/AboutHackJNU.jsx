import "../styles/About.css";

const AboutHackJNU = () => {
  return (
    <div>
      <div className="card" style={{ marginBottom: "50px" }}>
        <div class="card-body">
          <h5 class="card-title">HACK JNU 3.0</h5>
          <p class="card-text">India's largest Hackathon</p>
        </div>
      </div>

      {/* for down*/}
      <div class="card-group ">
        <div class="card my-3 mx-5" style={{ borderRadius: "5px" }}>
          <div class="card-body">
            <h5 class="card-title">WHAT ?</h5>
            <p class="card-text" style={{ marginTop: "30px",marginBottom:"10px" }}>
              India's largest hackathon organised by jnu where innovators are
              invited to show their talent and win rewards.
            </p>
            <div className="btn btn-primary">Register</div>
          </div>
        </div>
        <div class="card my-3 mx-5" style={{ borderRadius: "5px" }}>
          <div class="card-body">
            <h5 class="card-title">WHERE ?</h5>
            <p class="card-text" style={{ marginTop: "30px",marginBottom:"55px" }}>
              Convention Centre Jawaharlal Nehru University, New Delhi
            </p>
            <div className="btn btn-primary">Location</div>

          </div>
        </div>
        <div class="card my-3 mx-5" style={{ borderRadius: "5px" }}>
          <div class="card-body">
            <h5 class="card-title">HOW ?</h5>
            <p class="card-text" style={{ marginTop: "30px" }}>
              By registering on devfolio you can participate.
            </p>
          </div>
        </div>
        <div class="card my-3 mx-5" style={{ borderRadius: "5px" }}>
          <div class="card-body">
            <h5 class="card-title">WHO ?</h5>
            <p class="card-text" style={{ marginTop: "30px" }}>
              Any college student can participate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHackJNU;
