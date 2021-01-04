import React from 'react';

import Date from '../function/UseDate';
import './topbar.css';

function TopBar() {

    const {gameDay, gameMonth, gameYear} = Date();

    return (
        <div className="topbar-container">
            <h4>{`${gameDay} - ${gameMonth} - ${gameYear}`}</h4>
        </div>
    )
}

export default TopBar
