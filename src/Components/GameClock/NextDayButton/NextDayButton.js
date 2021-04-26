import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addDay } from "../../../executeRedux";
import { deductCycle } from "../../../function/redux/playerConfig/cardRedux";

export default function NextDayButton(props) {
  const { btnText } = props;
  const dispatch = useDispatch();
  const [isButton, setIsButton] = useState(false);

  const activeButton = () => {
    setIsButton(true);
    dispatch(addDay());
    dispatch(deductCycle());

    setTimeout(() => {
      setIsButton(false);
    }, 2100);
  };

  return (
      <button className="button red" disabled={isButton} onClick={activeButton}>
        <h5>{btnText}</h5>
      </button>
  );
}
