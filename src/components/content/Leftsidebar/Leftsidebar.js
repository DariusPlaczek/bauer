import React from "react";

import './Leftsidebar.css'
import ObjectList from './ObjectList/ObjectList'
import GameMoney from './GameMoney/GameMoney'
import Storrage from './Storrage/Storrage'

function Leftsidebar() {
  return (
    <div className="leftsidebar-container">
      <GameMoney />
      <ObjectList />
      <Storrage />
    </div>
  );
}

export default Leftsidebar;
