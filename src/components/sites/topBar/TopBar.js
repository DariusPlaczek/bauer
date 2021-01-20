import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { monthString } from "../../units/monthString";
import { language } from "../../units/language";
import { addDay } from "../../function/Date/redux";
import "./topbar.css";

function TopBar() {
  const gameDate = useSelector((state) => state.reduxDate);
  const dispatch = useDispatch();

  return (
    <div className="topbar-container">
      <h4>{`${gameDate.day} - ${monthString[gameDate.month].month} - ${
        gameDate.year
      }`}</h4>
      <button onClick={() => dispatch(addDay())}>{language.de.button.nextDay}</button>
    </div>
  );
}

export default TopBar;
