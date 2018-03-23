import fetch from "node-fetch"
import config from '../config/config'
import parseRawResult from './convertNutritionixToNutritionInfo'


export default async (upc) => {
  const url = `https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=${config.nutritionix.appId}&appKey=${config.nutritionix.appKey}`;
  const rawResult = await fetch(url).then(res => res.json());
  if (rawResult.status_code === 404) {
    return undefined;
  } else {
    return parseRawResult(rawResult);
  }
};
