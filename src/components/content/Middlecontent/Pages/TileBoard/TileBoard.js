import React, { useState } from "react";
import { useSelector } from "react-redux";
import TileCard from "./TileCard";

import "./TileBoard.css";

function TileBoard() {
  const tileMap = useSelector((state) => state.reduxPlayerData.tileBoard);

  const [entiti, setEntiti] = useState([]);


  const openRightBar = (event) => {
    setEntiti(tileMap[event.target.id]);
  };

  const isbuyed = () => {
      if (entiti.isAktiv) {
        return (
            <div className="buyed-container">
                <div className="image-product"></div>
                <h3>Name: Hafer</h3>
                <h3>Name: Hafer</h3>
                <h3>Name: Hafer</h3>
                <div className="person-card-image"></div>
            </div>
        )
      }

      return <p>Kaufen</p>  

  }

  return (
    <div className="tile-container ">
      {tileMap &&
        tileMap.map((value, ids) => (
          <TileCard
            key={value._id}
            id={value.id}
            fieldId={value.fieldId}
            click={(event) => openRightBar(event)}
          />
        ))}
      <div className="rightSideContainer">
          {isbuyed()}
      </div>
    </div>
  );
}

export default TileBoard;
