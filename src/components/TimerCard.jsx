import React from "react";
import '../styles/TimerCard.css'
function TimerCard(props){
    return <div className="timerCard">
        {/* <h1>Hacking Begins in</h1> */}
        
        <table>
        <caption><h1>Hacking Begins in</h1></caption>
            <tbody>
                <tr>
                    <th>{props.days}</th>&nbsp;
                    <th>{props.hours}</th>&nbsp;
                    <th>{props.minutes}</th>&nbsp;
                    <th>{props.seconds}</th>&nbsp;
                </tr>
                <tr>
                    <td>DAYS</td>&nbsp;
                    <td>HOURS</td>&nbsp;
                    <td>MINUTES</td>&nbsp;
                    <td>SECONDS</td>&nbsp;
                </tr>
            </tbody>
        </table>
        
    </div>
}

export default TimerCard