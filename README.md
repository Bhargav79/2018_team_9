# Fetch nutritional info
This is a web-service which accepts a upc and category in query parameters and returns json.

Example call:
```
//tbd

```

## Rating Module
This service is dependent upon a rules engine endpoint. The url is configured in `config/config.json`. see https://github.com/dsmHack/2018-dmarc-rules-engine
calculates a nutrition score based on nutritional info. Takes a fully formed `nutritionalInfo` object and returns a fully formed `score` object.
```
export default (nutritionalInfo) => {
  ////...

  return score;
}
```

## Fetch Module

pulls nutrition info from third party sources. Returns either undefined, or a fully formed `nutritionalInfo`.
```
export default (upc) => {
  ////...

  return nutritionalInfo;
}
```

## Example `nutritionalInfo` object
see https://docs.google.com/spreadsheets/d/1iPnCfN8zQySS-zZzUeXFGD0EdGRzYT3RinefIcEDCRo/edit#gid=1415619299 *tab 2*
```
{
  "category": "Starch",
  "sodium": 10,
  "sugar": 20,
  "fat": 30,
  "protein": 40,
  "fiber": 50
}
```

## Example `score` object
 ```
 {
    “score”: 5
 }
 ```
