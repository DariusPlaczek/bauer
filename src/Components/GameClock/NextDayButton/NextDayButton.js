import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addDay } from "../../../executeRedux";
import { deductCycle } from "../../../function/redux/playerConfig/cardRedux";

export default function NextDayButton(props) {
  const { btnText } = props;
  const dispatch = useDispatch();
  const [isButton, setIsButton] = useState(false);

  const styles = {
    cursor: !isButton ? "pointer" : "none",
  };

  const activeButton = () => {
    setIsButton(true);
    dispatch(addDay());
    dispatch(deductCycle());

    setTimeout(() => {
      setIsButton(false);
    }, 2100);
  };

  return (
    <div className="bnt-container" style={styles} onClick={activeButton}>
      <div className="btn-middle-left"></div>
      <div className="btn-middle-center">
        <h5>{btnText}</h5>
      </div>
      <div className="btn-middle-right"></div>
    </div>
  );
}
