import { useState, useEffect } from "react";

import config from '../../units/config'


function useConvert(props) {

  const { configPfennig, configSchilling, configPfund } = config.convertFactor;

  const [pfennig, setPfenning] = useState(0);
  const [schilling, setSchilling] = useState(0);
  const [pfund, setPfund] = useState(0);

  useEffect(() => {
    setPfenning(() => (props % configPfennig % configSchilling))
    setSchilling(() => Math.floor((props % configPfennig % configPfund) / configSchilling))
    setPfund(() => Math.floor(props / configPfund / configSchilling))

  }, [configPfennig, configSchilling, configPfund, props])

  return { pfennig, schilling, pfund };
}

export default useConvert;
