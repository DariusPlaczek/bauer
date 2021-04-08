import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Clock() {

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
    <div className="clock-container">
      <div className="clock-quader clock-top-left"></div>
      <div className="clock-quader clock-top-right"></div>
      <div className="clock-quader clock-bottom-left"></div>
      <div className="clock-quader clock-bottem-right"></div>
      <div className={`${animationDegrees} clock-pointer-container`}>
        <div className="clock-pointer "></div>
      </div>
    </div>
  );
}

export default Clock;

