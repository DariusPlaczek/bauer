import React from "react";
import { useSelector } from "react-redux";

import {useConversion} from "../../../../directories";

function GameMoney() {
  const { playerMoney } = useSelector((state) => state.reduxPlayerData);
  const { pfennig, schilling, pfund } = useConversion(playerMoney);

  return (
    <>
      <h2>Geld</h2>
      <h5>Pfund: {pfund}</h5>
      <h5>Schilling: {schilling}</h5>
      <h5>Pfennig: {pfennig}</h5>
    </>
  );
}

export default GameMoney;
