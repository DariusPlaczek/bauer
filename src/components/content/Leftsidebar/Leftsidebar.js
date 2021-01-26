import React from "react";

import './Leftsidebar.css'
import ObjectList from './ObjectList/ObjectList'
import GameMoney from './GameMoney/GameMoney'

function Leftsidebar() {
  return (
    <div className="leftsidebar-container">
      <GameMoney />
      <ObjectList />
    </div>
  );
}

export default Leftsidebar;
