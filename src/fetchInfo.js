import fetch from "node-fetch"
import querystring from "querystring"
import config from '../config/config'
//sample call
// https://api.nal.usda.gov/ndb/search/?format=xml&q=**UPC**&max=25&offset=0&api_key=vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19

// config.nutritionix.appId}&appKey=${config.nutritionix.appKey}`

let baseUrl = "https://api.nal.usda.gov/ndb/search/";
let format = "json";
let api_key = "vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19";

export default async (upc) => {
    let params = {
        "api_key" : api_key,
        "format":format,
        "q":upc
    };
    let call = baseUrl.concat("?").concat(querystring.stringify(params));
    return await fetch(call).then(res => res.json());
}
