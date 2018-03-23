import fetch from 'node-fetch';
import config from '../config/config';
import convert from './convertUsdaToNutritionInfo';
//sample call
// https://api.nal.usda.gov/ndb/search/?format=xml&q=**UPC**&max=25&offset=0&api_key=vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19

// config.nutritionix.appId}&appKey=${config.nutritionix.appKey}`

export default async (upc) => {
  const firstPass = await fetch(`${config.usda.apiBaseUrl}?format=${config.usda.format}&max=${config.usda.max}&offset=${config.usda.offset}&q=${upc}&api_key=${config.usda.apiKey}`).then(res => res.json());
  if (firstPass.list && firstPass.list.item) {
    const ndbno = firstPass.list.item[0].ndbno;
    const rawResult = await fetch(`${config.usda.apiNutritionUrl}?format=${config.usda.format}&ndbno=${ndbno}&api_key=${config.usda.apiKey}`).then(res => res.json());
    return
  }else{
    return undefined;
  }
}
