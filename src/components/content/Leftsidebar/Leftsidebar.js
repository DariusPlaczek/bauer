import React from "react";

import './Leftsidebar.css'
import GameMoney from './GameMoney/GameMoney'
//import Storrage from './Storrage/Storrage'
import Trade from './Trade/Trade'

function Leftsidebar() {
  return (
    <div className="leftsidebar-container">
      <GameMoney />
      <br />
      <Trade />

     {/* <Storrage />  */}
    </div>
  );
}

export default Leftsidebar;
