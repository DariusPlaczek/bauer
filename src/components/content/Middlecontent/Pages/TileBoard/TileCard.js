import React from "react";

function TileCard(props) {
  const { fieldId, click, id } = props;

  const setCard = () => {
    switch (fieldId) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 99:
        return 99;
      default:
        return;
    }
  };

  return (
    <>
      <div id={id} className={`style-${setCard()}`} onClick={click} ></div>
    </>
  );
}

export default TileCard;
