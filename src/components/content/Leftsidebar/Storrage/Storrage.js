import React from "react";
import {useSelector} from 'react-redux'

// import config from '../../../../config/gameConfig/config'
import { gameConfig } from '../../../../directories'

function Storrage() {

  const sizes = gameSetting.storrage.size
  const {storageSpace} = useSelector((state) => state.reduxMoney)
  const styles = {
    height: storageSpace + "%"
  }

  return (
    <>
      <div className="box">
        <div className="track" style={styles}>{storageSpace}</div>
      </div>
    </>
  );
}

export default Storrage;
