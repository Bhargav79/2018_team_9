import fetch from "fetch"
import querystring from "querystring"
//sample call
// https://api.nal.usda.gov/ndb/search/?format=xml&q=**UPC**&max=25&offset=0&api_key=vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19

let baseUrl = "https://api.nal.usda.gov/ndb/search/";
let format = "json";
let api_key = "vOXgi2JypetmVvVEILas1K7rVieqQgr01nUptK19";

let fetcher = function (){


  return querystring.stringify({
      "category": "Starch",
      "subCategory": "Rice",
      "sodium": "10",
      "sugar": "20",
      "fat": "30"
  });

    // fetch.fetchUrl(baseUrl,)
};

export default (upc) => {

     console.log(fetcher());
      return {
      "category": "Starch",
      "subCategory": "Rice",
      "sodium": "10",
      "sugar": "20",
      "fat": "30"
    };
}
