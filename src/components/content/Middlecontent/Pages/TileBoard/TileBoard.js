import React from 'react'

function TileBoard() {
    const tile = [0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1]
    

    return (
        <div className="tile-container ">
            {tile.map(value => (
                value === 0 ? <div className="style-1"></div> : <div className="style-0"></div>
            ))}
        </div>
    )
}

export default TileBoard
