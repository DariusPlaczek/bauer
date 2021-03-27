import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TileCard from "./TileCard";

import productList from '../../../../../config/productList'
import { addNewTileCard, setTileCardZero } from '../../../../../function/redux/playerConfig/cardRedux'
import {addWareFromTileCard} from '../../../../../function/redux/playerConfig/redux'

import "./TileBoard.css";

function TileBoard() {
  const tileMap = useSelector((state) => state.reduxTileCard.tileBoard);
  const dispatch = useDispatch();
  const [entiti, setEntiti] = useState([]);
  const [isSelectedCard, setIsSelectedCard] = useState(false)


  const openRightBar = (event) => {
    setEntiti(tileMap[event.target.id]);
    setIsSelectedCard(true)
  };

  const addToTileCard = (event) => {
    for (const iterator of productList) {
      if (event.target.id === iterator.id) {
        dispatch(addNewTileCard({cardTileId: entiti.id, content: iterator}))
      }
    }
  }

  const detailedFileCard = () => {
    if (!isSelectedCard) {
      return
    }

    if (!entiti.isCard) {
      return (
        <div className="buyed-container">
          <h3>Was soll angebaut werden</h3>
            {productList.map((value, selectId) => 
              <div key={value.id}>
                <h5>{value.name}</h5>
                <h6>{value.cycle}</h6>
                <h6>{value.weight}</h6>
                <button id={value.id} onClick={(event) => addToTileCard(event)}>Hinzufügen</button>
                <br />
              </div>
            )}
        </div>
      )
    } else {
      return (
        <div className="buyed-container">
          <h3>Was soll angebaut werden</h3>
          <div className="tileboard-card"><img src={entiti.card[0].image} alt={entiti.card[0].alt} /></div>
          <h5>{entiti.card[0].name}</h5>
          <h6>{entiti.card[0].zykl}</h6>
          <h6>{entiti.card[0].count}</h6>
          
          {entiti.card[0].zykl === 0 ? <button id={entiti.id} onClick={(event) => addToWarehouse(event.target.id)} >Verschiebe ins Lager</button> : <></>}

        </div>
      )
    } 

  }

  const addToWarehouse = (event) => {
    dispatch(addWareFromTileCard({productId: entiti.card[0].productID, productCount: entiti.card[0].count}))
    dispatch(setTileCardZero({setId: parseInt(event)}))
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
          {detailedFileCard()}
      </div>
    </div>
  );
}

export default TileBoard;
