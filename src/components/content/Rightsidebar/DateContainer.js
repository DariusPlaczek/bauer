import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { monthString } from "../../../units/monthString";
import { language } from "../../../units/language";
import { addDay } from "../../../function/Date/redux";

function DateContainer() {
  const gameDate = useSelector((state) => state.reduxDate);
  const dispatch = useDispatch();

  console.log(gameDate);

  return (
    <div className="date-container">
      <h4>{`${monthString[gameDate.month].month} - ${gameDate.year}`}</h4>
      <button onClick={() => dispatch(addDay())}>{language.de.button.nextDay}</button>
    </div>
  )
}

export default DateContainer
