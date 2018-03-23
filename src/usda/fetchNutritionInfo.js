import fetch from "node-fetch"
import querystring from "querystring"
import config from '../config/config'
//sample call
// https://api.nal.usda.gov/ndb/search/?format=xml&q=**UPC**&max=25&offset=0&api_key=vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19

// config.nutritionix.appId}&appKey=${config.nutritionix.appKey}`

export default async (upc) => {
    const result = await fetch(`${config.usda.apiBaseUrl}?format=${config.usda.format}&max=${config.usda.max}&offset=${config.usda.offset}&q=${upc}&api_key=${config.usda.apiKey}`).then(res => res.json());
    console.log(JSON.stringify(result));
    const ndbno = result.list.item[0].ndbno;
    if(ndbno)
    {
        console.log(`${config.usda.apiNutritionUrl}?format=${config.usda.format}&ndbno=${ndbno}&api_key=${config.usda.apiKey}`);
        const result2 = await fetch(`${config.usda.apiNutritionUrl}?format=${config.usda.format}&ndbno=${ndbno}&api_key=${config.usda.apiKey}`).then(res => res.json());
        
        console.log(JSON.stringify(result2));
    }
}
