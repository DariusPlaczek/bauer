import React from "react";

import { useConversion } from "../../../../directories";

function Conversion(props) {
  const {sum} = props;
  const { pfennig, schilling, pfund } = useConversion(sum)

  return (
    <>
      <h6>
        PD: {pfund} | SG: {schilling} | PG: {pfennig}{" "}
      </h6>
    </>
  );
}

export default Conversion;
