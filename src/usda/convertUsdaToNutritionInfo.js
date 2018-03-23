export default async (raw) => {
  const nutrientsArr = raw.report.food.nutrients;
  const sugarObj = nutrientsArr.filter(function(e, i) {
    return e.nutrient_id == 269;
  });
  var sugar;
  switch (sugarObj.unit)
  {
    case "g":
      sugar = sugarObj.value * 1000;
      break;
    case "mg":
    default:
      sugar = sugarObj.value;
      break;
  }
  
  return {
    sugar: raw.report.food.nutrients.nf_sugars,
    sodium: raw.foods[0].nf_sodium,
    fat: raw.foods[0].nf_total_fat,
    protein: raw.foods[0].nf_protein,
    fiber: raw.foods[0].nf_dietary_fiber,
    ...raw.foods[0],
    full_nutrients: null
}};