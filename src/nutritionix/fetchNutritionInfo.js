import fetch from "node-fetch"
import config from '../config/config'
import parseRawResult from './convertNutritionixToNutritionInfo'

let nutrientArray=[];
let headers =  {"x-app-id":config.nutritionix.appId,"x-app-key":config.nutritionix.appKey};

async function  getNutrientMap(){
  if(nutrientArray.length ===0){
     nutrientArray = await fetch(`${config.nutritionix.apiBaseUrl}utils/nutrients`).then(res => res.json())
  }
  return nutrientArray
}

export default async (upc) => {
  const rawResult= await fetch(`${config.nutritionix.apiBaseUrl}search/item?upc=${upc}`, {headers: headers}).then(res => res.json())
  const nutrientMap = await getNutrientMap();
  if (rawResult.status_code === 404) {
    return undefined;
  } else {
    return parseRawResult(mapAttrIdToNutrientName(rawResult,nutrientMap));
  }
};

function mapAttrIdToNutrientName(rawResult, nutrientMap) {
  //todo:: Implement Nutrient map to Attr nutrient ids returned from 2.0 api
  return rawResult
}



