import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { monthNames } from "../../directories";
//import { addDay } from "../../executeRedux";

function ShowDate() {
  const { month, year } = useSelector((state) => state.reduxDate);
  const [monthTrigger, setMonthTrigger] = useState(month);
  const [yearTrigger, setYearTrigger] = useState(year);

  useEffect(() => {
    setTimeout(() => {
      setMonthTrigger(month);
      setYearTrigger(year);
    }, 1000);
  }, [month, year]);

  return <h4>{`${monthNames[monthTrigger].month} - ${yearTrigger}`} A.D.</h4>;
}

export default ShowDate;
