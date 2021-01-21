import React from 'react'
import './Content.css'

import Leftsidebar from './Leftsidebar/Leftsidebar'
import Middlecontent from './Middlecontent/Middlecontent'
import Rightsidebar from './Rightsidebar/Rightsidebar'

function Content() {

  return (
    <div className="main-container">
      <Leftsidebar />
      <Middlecontent />
      <Rightsidebar />
    </div> 

)
}

export default Content

