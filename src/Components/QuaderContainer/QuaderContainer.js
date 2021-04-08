import React from 'react'

import './quaderContainer.css'

function QuaderContainer(props) {

  return (
    <div className="design-middle">
      <div className="top-middle">
        <div className="m-top-left"></div>
        <div className="m-top-middle"></div>
        <div className="m-top-right"></div>
      </div>
      <div className="center-middle">
        <div className="m-center-left"></div>
        <div className="m-center-middle">
          {props.children}
        </div>
        <div className="m-center-right"></div>
      </div>
      <div className="bottom-middle">
        <div className="m-bottom-left"></div>
        <div className="m-bottom-middle"></div>
        <div className="m-bottom-right"></div>
      </div>
    </div>
  )
}

export default QuaderContainer
