import React from 'react'

import './SingleNavigationButton.css'

function SingleNavigationButton(props) {
  const {title} = props;
  return (
    <div className="singleNavigatonButton-container" >
      <div className="singleNavigatonButton">
        <h5>{title}</h5>
      </div>
    </div>
  )
}

export default SingleNavigationButton
