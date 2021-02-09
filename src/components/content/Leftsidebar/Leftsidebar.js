import React from "react";
import { Link} from 'react-router-dom'

import './Leftsidebar.css'
import GameMoney from './GameMoney/GameMoney'
//import Storrage from './Storrage/Storrage'
import Trade from '../../Trade/Trade'

function Leftsidebar() {
  return (
    <div className="leftsidebar-container">
      <GameMoney />
      <br />
      <Link to="/playerwarehouse">
          <button>
            Zum Spielerlager
          </button>
      </Link>
      <Link to="/citywarehouse">
        <button>
          Zum Stadtlager
        </button>
      </Link>
      {/* <Trade /> */}

     {/* <Storrage />  */}
    </div>
  );
}

export default Leftsidebar;
