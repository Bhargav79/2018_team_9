import fetchNutrixInfo from './nutritionix/fetchNutritionInfo';
import fetchUsdaInfo from './usda/fetchNutritionInfo';
export default async (upc) => {
    
    //Nutrix API call
    //const nutritionalInfo = await fetchInfo(upc);
    
    //Usda API call
    const usdaInfo = await fetchUsdaInfo(upc);
    console.log(JSON.stringify(usdaInfo));
    return {
        "upc": upc,
        "testing": "testing"
    }
  };
  