// ****************** CONFIG *******************/
import gameSettings from "./settings/gameSettings";
import languages from "./settings/language";
import monthString from "./settings/monthString";
import cityWarehouse from "./settings/cityWarehouse.js";

export const gameSetting = gameSettings;
export const language = languages;
export const monthNames = monthString;
export const ware = cityWarehouse;


// ****************** FUNCTION *******************/

export {default as useConversion} from './function/useHooks/useConversion'