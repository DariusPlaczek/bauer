import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import axiosy from "../../axiosy";
import { loginPlayer } from "../../function/redux/playerConfig/redux";
import { loginCity } from "../../function/redux/cityStockConfig/redux";
import { loadTileCard } from "../../function/redux/playerConfig/cardRedux"
import { loadDate } from "../../function/redux/date/redux"

function Login() {

  const { playerMoney, storageSpace, stockProducts } = useSelector((state) => state.reduxPlayerData)
  const { tileBoard } = useSelector((state) => state.reduxTileCard)
  const warestockProducts = useSelector((state) => state.reduxCityStoreData.stockProducts)
  const { day, month, year } = useSelector((state) => state.reduxDate)
  const dispatch = useDispatch();

  const login = () => {
    async function fetchData() {
      const req = await axiosy("/addNewUser");

      dispatch(loadTileCard(req.data.tileBoard))
      dispatch(
        loginPlayer({
          playerId: req.data.userId,
          playerNames: req.data.name,
          playerMoney: req.data.playerMoney,
          playerWare: req.data.warehouse.playerWarehouse,
        })
      );
      dispatch(loginCity(req.data.warehouse.cityWarehouse));
      dispatch(loadDate({ loadDate: req.data.gameDate[0] }))
    }


    fetchData();
  };

  const save = () => {
    const entity = {
      id: "605a3d6978b1b866ad143844",
      money: playerMoney,
      storage: storageSpace,
      gameDate: {
        day: day,
        month: month,
        year: year
      },
      ware: {
        playerWarehouse: stockProducts,
        cityWarehouse: warestockProducts
      },
      tBoard: tileBoard
    }

    async function updateEntity() {
      console.log(entity);
      await axios.patch("http://localhost:8001/updateUser", entity)
          .then((response) => console.log(response.data));
    }

    updateEntity();
  };

  return (
    <>
      <button onClick={login}>Login</button>
      <button onClick={save}>Speichern</button>
    </>
  );
}

export default Login;
