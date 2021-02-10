import React from "react";
import { useConversion } from "../../../../../directories";

function MoneyConversion(props) {
  const { pfennig, schilling, pfund } = useConversion(props.value);

  return (
    <>
      <h6>
        PD: {pfund} | SG: {schilling} | PG: {pfennig}
      </h6>
    </>
  );
}

export default MoneyConversion;
