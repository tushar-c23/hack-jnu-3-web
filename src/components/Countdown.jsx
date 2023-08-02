import React from "react";
import { useState, useEffect } from "react";
import TimerCard from "./TimerCard";

function Countdown(){

    const endTime= new Date('August 15, 2023 12:00:00').getTime()
    const [currentTime,setCurrentTime]=useState(new Date().getTime())
    const gap=endTime-currentTime 

    const seconds= 1000 
    const minutes=seconds*60
    const hours=minutes*60 
    const days=hours*24 

    const remainingDays=Math.floor(gap/days)
    const remainingHours=Math.floor((gap%days)/hours)
    const remainingMinutes=Math.floor((gap%hours)/minutes)
    const remainingSeconds=Math.floor((gap%minutes)/seconds)

    useEffect(()=>{
        setTimeout(()=>{
            setCurrentTime(new Date().getTime())
        },1000)
    },[currentTime])

    if(remainingDays===0 && remainingHours===0 &&remainingMinutes===0 && remainingSeconds===0){
        return <div style={{backgroundColor:"black"}}>
            <h2 style={{color:"pink"}}>Hacking Began!</h2>
        </div>
    }
    else{
        return <TimerCard days={remainingDays} hours={remainingHours} minutes={remainingMinutes} seconds={remainingSeconds} />
    }
   

}
export default Countdown