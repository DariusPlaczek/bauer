import {useState, useEffect} from 'react'

import { gameDate } from '../units/gameDate';

function UseDate() {

 // const [dateStop, setDateStop] = useState(true)

  const [{gameDay, gameMonth, gameYear}, setDate] = useState({
    gameDay: 1,
    gameMonth: 0,
    gameYear: 780
  });

  useEffect(() => {
    setTimeout(() => {
      if (gameMonth === 11 && gameDay === gameDate[gameMonth].days) {
        setDate({
          gameDay: 1,
          gameMonth: 0,
          gameYear: gameYear + 1
        })
        return;
      }

      if (gameDay !== gameDate[gameMonth].days) {
        setDate({
          gameDay: gameDay + 1,
          gameMonth: gameMonth,
          gameYear: gameYear
        })

        return;
      } else {
        setDate({
          gameDay: 1,
          gameMonth: gameMonth + 1,
          gameYear: gameYear
        })

        return;
      }
    }, 1000);
  }, [gameDay, gameMonth, gameYear])

  return {gameDay, gameMonth, gameYear};
}

export default UseDate
