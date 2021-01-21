import React from "react";

import './Leftsidebar.css'
import ObjectList from './ObjectList/ObjectList'

function Leftsidebar() {
  return (
    <div className="leftsidebar-container">
      <h1>Leftsidebar</h1>
      <ObjectList />
    </div>
  );
}

export default Leftsidebar;
