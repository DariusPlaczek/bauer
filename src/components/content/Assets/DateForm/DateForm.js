import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { monthNames } from "../../../../directories";
import { addDay } from "../../../../executeRedux";

function DateForm() {
  const { month, year } = useSelector((state) => state.reduxDate);
  const [monthTrigger, setMonthTrigger] = useState(month);
  const [yearTrigger, setYearTrigger] = useState(year);

  useEffect(() => {
    setTimeout(() => {
      setMonthTrigger(month);
      setYearTrigger(year);
    }, 1000);
  }, [month, year]);

  return (
    <div className="date-form-container">
      <div className="date-form-left"></div>
      <div className="date-form-center">
        <h4>{`${monthNames[monthTrigger].month} - ${yearTrigger}`} A.D.</h4>
      </div>
      <div className="date-form-right"></div>
    </div>
    // <div className="dateform">
    //   <div className="img-dateform">
    //     <h5>{`${monthNames[monthTrigger].month} - ${yearTrigger}`} A.D.</h5>
    //   </div>
    // </div>
  );
}

export default DateForm;
