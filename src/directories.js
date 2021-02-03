// ****************** CONFIG *******************/
import gameSettings from "./settings/gameSettings";
import languages from "./settings/language";
import monthString from "./settings/monthString";
import productList from "./settings/productList"

export const gameSetting = gameSettings;
export const language = languages;
export const monthNames = monthString;
export const ware = productList;


// ****************** FUNCTION *******************/

export {default as useConversion} from './function/useHooks/useConversion'