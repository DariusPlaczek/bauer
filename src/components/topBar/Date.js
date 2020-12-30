import React, {useState, useEffect} from 'react'

import { gameDate } from '../units/gameDate'

function Date() {

  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(780)
  const [day, setDay] = useState(1)

  useEffect(() => {

    setTimeout(() => {
      if (day === gameDate[month].days) {
        setMonth((prev) => prev + 1);
        setDay(1)
      } else {
        setDay((prev) => prev + 1)
      }
    }, 2000);

  }, [day])

  return (
      <>
          {`${day} - ${gameDate[month].month} - ${year}`}
      </>
  )
}

export default Date
