import { useState, useEffect } from "react";

import { gameSetting } from '../../directories'


function useConversion(props) {

  const { schillingZuPfund, pfennigZuSchilling } = gameSetting.convertFactor;

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
