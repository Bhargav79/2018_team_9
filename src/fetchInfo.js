import fetch from "node-fetch"
import querystring from "querystring"
//sample call
// https://api.nal.usda.gov/ndb/search/?format=xml&q=**UPC**&max=25&offset=0&api_key=vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19

let baseUrl = "https://api.nal.usda.gov/ndb/search/";
let format = "json";
let api_key = "vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19";

let fetcher = async function (upc){

};

export default async (upc) => {
    let params = {
        "api_key" : api_key,
        "format":format,
        "q":upc
    };
    let call = baseUrl.concat("?").concat(querystring.stringify(params));
    console.log(call);
    return await fetch(call).then(res => res.json());

    //   return {
    //   "category": "Starch",
    //   "subCategory": "Rice",
    //   "sodium": "10",
    //   "sugar": "20",
    //   "fat": "30"
    // };
}
