export default async (raw) => {
  const wrapWithDefaultValue = (value) => {
    if (!value) {
      return 0;
    } else {
      return value;
    }
  }

  const ret= {
    sugar: wrapWithDefaultValue(raw.foods[0].nf_sugars * 1000),
    sodium: wrapWithDefaultValue(raw.foods[0].nf_sodium),
    fat: wrapWithDefaultValue(raw.foods[0].nf_total_fat),
    protein: wrapWithDefaultValue(raw.foods[0].nf_protein),
    fiber: wrapWithDefaultValue(raw.foods[0].nf_dietary_fiber),
    fat_saturated: wrapWithDefaultValue(raw.foods[0].nf_saturated_fat),
    calories: wrapWithDefaultValue(raw.foods[0].nf_calories),
    raw: wrapWithDefaultValue(raw.foods[0])
  };
  console.log(ret);
  return ret;
};
