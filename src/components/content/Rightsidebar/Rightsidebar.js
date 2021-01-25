import React from 'react'

import DateContainer from './DateContainer'
import Clock from './Clock/Clock'
import "./Rightsidebar.css";

function Rightsidebar() {
  return (
    <div className="rightsidebar-container">
      <Clock />
      <DateContainer />
    </div>
  )
}

export default Rightsidebar
