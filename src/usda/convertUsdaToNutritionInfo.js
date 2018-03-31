export default async (raw) => {
  const nutrientsArray = raw.report.food.nutrients;
  const convertValue = (obj) => {
    if (!obj || !obj.measures) {
      return 0;
    }
    // https://ndb.nal.usda.gov/ndb/foods/show/46985?fgcd=&manu=&lfacet=&format=&count=&max=50&offset=&sort=default&order=asc&qlookup=074873163230&ds=&qt=&qp=&qa=&qn=&q=&ing=
    const measure = obj.measures.find(() => true);
    // use units from the nutrient and not from measure.eunit
    // measure.eunit is unit for measure.eqv
    switch (obj.unit) {
      case 'g':
        return measure.value * 1000;
      case 'kcal':
      case 'mg':
      default:
        return measure.value * 1;
    }
  };
  const convertWithDefault = (obj) => {
    const tempValue = convertValue(obj);
    if (!tempValue) {
      return 0;

    } else {
      return tempValue;
    }
  }
  const findNutrient = (id) => {
    const nutrientObject = nutrientsArray.find((e) => e.nutrient_id == id);
    return convertWithDefault(nutrientObject);
  };

  return {
    sugar: findNutrient(269),
    sodium: findNutrient(307),
    fat: findNutrient(204),
    protein: findNutrient(203),
    fiber: findNutrient(291),
    fat_saturated: findNutrient(606),
    calories: findNutrient(208),
    productName: raw.report.food.name,
    brandName: '',
    raw: raw.report.food
  }
};
