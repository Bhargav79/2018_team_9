import fetch from "node-fetch"
import config from '../config/config'
import parseRawResult from './convertNutritionixToNutritionInfo'

export default async (upc) => {
  const rawResult = await fetch(`${config.nutritionix.apiBaseUrl}search/item?upc=${upc}`, config.nutritionix.fetchOptions)
    .then(res => res.json())
  if (rawResult.status_code === 404 || !rawResult.foods) {
    return undefined;
  } else {
    return parseRawResult(rawResult);
  }
};
