import React from "react";
import { Link } from "react-router-dom";

import "./Leftsidebar.css";

function Leftsidebar() {
  return (
    <div className="leftsidebar-container">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/playerstock">
        <button>Spielerlager</button>
      </Link>
      <Link to="/citystock">
        <button>Stadtlager</button>
      </Link>
    </div>
  );
}

export default Leftsidebar;
