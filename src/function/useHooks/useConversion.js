import { useState, useEffect } from "react";

import { gameConfig } from '../../directories'


function useConversion(props) {

  const { schillingZuPfund, pfennigZuSchilling } = gameConfig.convertFactor;

  const [pfennig, setPfenning] = useState(0);
  const [schilling, setSchilling] = useState(0);
  const [pfund, setPfund] = useState(0);

  useEffect(() => {
    setPfenning(() => (props % pfennigZuSchilling))
    setSchilling(() => Math.floor((props / pfennigZuSchilling) % schillingZuPfund))
    setPfund(() => Math.floor(props / pfennigZuSchilling / schillingZuPfund))

  }, [pfennigZuSchilling, schillingZuPfund, props])

  return { pfennig, schilling, pfund };
}


export default useConversion;
