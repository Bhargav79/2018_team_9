import fetchNutrixInfo from './nutritionix/fetchNutritionInfo';
import fetchUsdaInfo from './usda/fetchNutritionInfo';
export default async (upc) => {
  const usdaInfo = await fetchUsdaInfo(upc);
  if (usdaInfo) {
    return usdaInfo;
  } else {
    return await fetchNutrixInfo(upc);
  }
};
