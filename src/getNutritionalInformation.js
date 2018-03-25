import fetchNutrixInfo from './nutritionix/fetchNutritionInfo';
import fetchUsdaInfo from './usda/fetchNutritionInfo';

//will be traversed in order. add new apis here.
const apiList = [
  fetchUsdaInfo,
  fetchNutrixInfo
];

export default async (upc) => {
  for (let api of apiList) {
    try {
      const result = await api(upc);
      if (result) {
        return result;
      }
    } catch (e) {
      console.log(e);
    }
  }
  return undefined;
};
