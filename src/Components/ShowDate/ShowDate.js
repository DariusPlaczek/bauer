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

  return (
    <div className="date-form-container">
      <div className="quader-bottom-connection">
        <div
          className="inner-framed-container inner-framed"
          style={{ width: "270px", padding: "0 25px"}}
        >
          <h4>{`${monthNames[monthTrigger].month} - ${yearTrigger}`} A.D.</h4>
        </div>
      </div>
    </div>
  );
}

export default ShowDate;
