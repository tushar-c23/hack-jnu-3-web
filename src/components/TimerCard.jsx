/* eslint-disable react/prop-types */
import React from "react";
import "./TimerCard.css";
function TimerCard(props) {
  return (
    <div className="countDown">
      <div>
        <h1 className="countdown-title">Hacking Begins in</h1>
      </div>

      <div className="timerCards">
        <div className="timerCard">
          <h2>{props.days}</h2>
          <h4>DAYS</h4>
        </div>
        <div className="timerCard">
          <h2>{props.hours}</h2>
          <h4>HOURS</h4>
        </div>
        <div className="timerCard">
          <h2>{props.minutes}</h2>
          <h4>MINUTES</h4>
        </div>
        <div className="timerCard">
          <h2>{props.seconds}</h2>
          <h4>SECONDS</h4>
        </div>
      </div>
    </div>
  );
}

export default TimerCard;
