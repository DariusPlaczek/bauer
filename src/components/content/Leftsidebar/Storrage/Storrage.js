import React from "react";

// import config from '../../../../config/gameConfig/config'
import { gameSetting } from '../../../../directories'

function Storrage() {

  const sizes = gameSetting.storrage.size
  const styles = {
    height: sizes + "%"
  }

  return (
    <>
      <div className="box">
        <div className="track" style={styles}>{sizes}</div>
      </div>
    </>
  );
}

export default Storrage;
