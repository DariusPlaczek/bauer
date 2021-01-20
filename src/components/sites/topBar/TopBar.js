import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { monthString } from "../../units/monthString";
import { addDay } from "../../function/Date/redux";
import "./topbar.css";

function TopBar() {
  
  const gameDate = useSelector((state) => state.reduxDate);
  const gameDay = useSelector((state) => state.reduxDate.day)
  const dispatch = useDispatch();

  useEffect(() => {

  }, [gameDay])

  return (
    <div className="topbar-container">
      <h4>{`${gameDate.day} - ${monthString[gameDate.month].month} - ${
        gameDate.year
      }`}</h4>
      <button onClick={() => dispatch(addDay())}>Next Day</button>
    </div>
  );
}

export default TopBar;
