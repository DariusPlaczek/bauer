// ****************** CONFIG *******************/
import gameConfigs from "./config/gameConfigs";
import productList from "./config/productList";
import languages from "./config/language";
import monthString from "./config/monthString";


export const gameConfig = gameConfigs;
export const productLists = productList
export const language = languages;
export const monthNames = monthString;


// ****************** FUNCTION *******************/

export {default as useConversion} from './function/useHooks/useConversion'