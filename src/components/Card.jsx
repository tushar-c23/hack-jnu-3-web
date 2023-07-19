import React from "react";
import Tilt from 'react-vanilla-tilt'

function Card(props) {
    return  <Tilt>
        <div className="card" data-tilt="true">

<div className="title">

    <div className="details">
        <div className="name">
            <h3>{props.name}</h3>
        </div>
        <div className="role">
            <p>{props.role}</p>
        </div>
    </div>

</div>
<div className="photo">
    <img src={"./"+props.photo+".png"} alt='' />
</div>
<div className="socials">
    <a href="">
        <i className="fa-brands fa-github fa-lg" style={{color: "#f10086;"}}></i>
    </a>
    <a href="">
        <i className="fa-brands fa-linkedin fa-lg" style={{color: "#f10086;"}}></i>
    </a>
    <a href="">
        <i className="fa-brands fa-instagram fa-lg" style={{color: "#f10086;"}}></i>
    </a>
</div>
</div>
    </Tilt>
}

export default Card