import React from 'react'
import SingleContentButton from './SingleContentButton'

import './ContentButtons.css'

function ContentButtons(){
    return (
        <div className="content-buttons">
            <SingleContentButton title="Spielerlager"/>
            <SingleContentButton title="Stadtlager"/>
        </div>

)
}

export default ContentButtons
