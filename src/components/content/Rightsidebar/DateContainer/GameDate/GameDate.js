import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { monthString } from "../../../../../units/monthString";
import { language } from "../../../../../units/language";
import { addDay } from "../../../../../function/Date/redux";

function GameDate() {
  const { month, year } = useSelector((state) => state.reduxDate);
  const dispatch = useDispatch();

  const [isButton, setIsButton] = useState(false);
  const [monthTrigger, setMonthTrigger] = useState(month);
  const [yearTrigger, setYearTrigger] = useState(year);

  const activeButton = () => {
    setIsButton(true);
    dispatch(addDay());

    setTimeout(() => {
      setIsButton(false);
    }, 2100);
  };

  useEffect(() => {
    setTimeout(() => {
      setMonthTrigger(month);
      setYearTrigger(year);
    }, 1000);
  }, [month, year]);

  return (
    <div className="date-container">
      <h4>{`${monthString[monthTrigger].month} - ${yearTrigger}`}</h4>
      <button disabled={isButton} onClick={activeButton}>
        {language.de.button.nextDay}
      </button>
    </div>
  );
}

export default GameDate;
