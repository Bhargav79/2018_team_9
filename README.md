# Fetch nutritional info
This is a web-service which accepts a upc in query parameters and returns json nutrition info.

Example call:
```
➜ curl -v 'http://localhost:3000/?upc=39400018100' -H 'Accept: application/json' | python -m json.tool
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> GET /?upc=39400018100 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.54.0
> Accept: application/json
>
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 1267
< ETag: W/"4f3-s56SqMcyND0hl1ugsVm6gZmI3bo"
< Date: Fri, 23 Mar 2018 17:24:26 GMT
< Connection: keep-alive
<
{ [1267 bytes data]
100  1267  100  1267    0     0   1007      0  0:00:01  0:00:01 --:--:--  1007
* Connection #0 to host localhost left intact
{
    "nutritionalInfo": {
        "calories": 100,
        "fat": null,
        "fat_saturated": null,
        "fiber": 7,
        "full_nutrients": null,
        "protein": 6,
        "raw": {
            "alt_measures": null,
            "brand_name": "Bush's Best",
            "food_name": "Pinto Beans",
            "full_nutrients": [
                {
                    "attr_id": 203,
                    "value": 6
                },
                {
                    "attr_id": 205,
                    "value": 18
                },
                {
                    "attr_id": 208,
                    "value": 100
                },
                {
                    "attr_id": 291,
                    "value": 7
                },
                {
                    "attr_id": 301,
                    "value": 40
                },
                {
                    "attr_id": 303,
                    "value": 1.44
                },
                {
                    "attr_id": 306,
                    "value": 310
                },
                {
                    "attr_id": 307,
                    "value": 450
                }
            ],
            "metadata": {},
            "ndb_no": null,
            "nf_calories": 100,
            "nf_cholesterol": null,
            "nf_dietary_fiber": 7,
            "nf_ingredient_statement": "Prepared Pinto Beans, Water, Salt, and Calcium Disodium Edta (to Promote Color Retention).",
            "nf_p": null,
            "nf_potassium": 310,
            "nf_protein": 6,
            "nf_saturated_fat": null,
            "nf_sodium": 450,
            "nf_sugars": null,
            "nf_total_carbohydrate": 18,
            "nf_total_fat": null,
            "nix_brand_id": "51db37cd176fe9790a899b8f",
            "nix_brand_name": "Bush's Best",
            "nix_item_id": "52b22182af5a0bb91c025b10",
            "nix_item_name": "Pinto Beans",
            "photo": {
                "highres": null,
                "is_user_uploaded": false,
                "thumb": "https://d1r9wva3zcpswd.cloudfront.net/536abcb529a0839e7408ef97.jpeg"
            },
            "serving_qty": 0.5,
            "serving_unit": "cup",
            "serving_weight_grams": 130,
            "source": 8,
            "tags": null,
            "updated_at": "2015-03-09T19:19:30+00:00"
        },
        "sodium": 450,
        "sugar": null
    },
    "qurey": {
        "upc": "39400018100"
    },
    "upc": "39400018100"
}
```

## Rating Module
 see https://github.com/dsmHack/2018-dmarc-rules-engine

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
  "sodium": 10,   // all in mg
  "sugar": 20,
  "fat": 30,
  "protein": 40,
  "fiber": 50,
  "fat_saturated": 60,
  "calories": 70     // in Kcal
}
```
