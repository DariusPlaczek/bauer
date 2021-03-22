import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import axiosy from "../../../../../axios";
import { loginPlayer } from "../../../../../function/redux/playerConfig/redux";
import { loginCity } from "../../../../../function/redux/cityStockConfig/redux";

function Login() {
  
  const { playerMoney, storageSpace, stockProducts } = useSelector((state) => state.reduxPlayerData)
  const warestockProducts = useSelector((state) => state.reduxCityStoreData.stockProducts)
  const dispatch = useDispatch();
  
  const login = () => {
    async function fetchData() {
      const req = await axiosy("/addNewUser");

      dispatch(
        loginPlayer({
          playerId: req.data.userId,
          playerNames: req.data.name,
          playerMoney: req.data.playerMoney,
          playerWare: req.data.warehouse.playerWarehouse,
          playerTileBoard: req.data.tileBoard
        })
      );
      dispatch(loginCity(req.data.warehouse.cityWarehouse));
    }

    fetchData();
  };

  const save = () => {
    const entity = {
      id: "60575968665d01b5744f2e51",
      money: playerMoney,
      storage: storageSpace,
      ware: {
        playerWarehouse: stockProducts,
        cityWarehouse: warestockProducts
      }
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

// const save = () => {
//   function pushData() {
//     //const req = await axios("/updateUser")
//     axios("/updateUser")
//     // await axios("/updateUser", {
//     //   test: "test send"
//     // })
//     // console.log(req);
//   }

//   pushData();
// }
