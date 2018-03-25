import fetch from 'node-fetch';
import config from '../config/config';
import convert from './convertUsdaToNutritionInfo';

export default async (upc) => {
  const searchUrl = `${config.usda.apiBaseUrl}?format=${config.usda.format}&max=${config.usda.max}&offset=${config.usda.offset}&q=${upc}&api_key=${config.usda.apiKey}`;
  const firstPass = await fetch(searchUrl, config.usda.fetchOptions)
    .then(res => res.json());
  if (firstPass.list && firstPass.list.item) {
    const ndbno = firstPass.list.item[0].ndbno;
    const detailsUrl = `${config.usda.apiNutritionUrl}?format=${config.usda.format}&ndbno=${ndbno}&api_key=${config.usda.apiKey}`;
    const rawResult = await fetch(detailsUrl, config.usda.fetchOptions)
      .then(res => res.json());
    return convert(rawResult);
  }
}
