import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NextDayButton from './NextDayButton/NextDayButton'
import './GameClock.css';

// import BtnFirst from "../../../Alt/content/Assets/btn/BtnFirst/BtnFirst";

function GameClock() {

    const dayTrigger = useSelector((state) => state.reduxDate.day);
    const [animationDegrees, setAnimationDegrees] = useState("deg45")

    useEffect(() => {
        switch (dayTrigger) {
          case 1:
            setAnimationDegrees('deg45')
            break;
          case 2:
            setAnimationDegrees('deg135')
            break;
          case 3:
            setAnimationDegrees('deg225')
            break;
          case 4:
            setAnimationDegrees('deg315')
            break;
          default:
            break;
        }
      }, [dayTrigger])

  return (
       <div className="uhr-container">
        <div className="next-day-button">
         <NextDayButton btnText="Nächster Tag" />
        </div>

        <div className={`${animationDegrees} uhr-drehscheibe`} ></div>
        <div className={`next-day`}></div>
      </div>
  );
}

export default GameClock;
