export default async (raw) => ({
  sugar: raw.foods[0].nf_sugars,
  sodium: raw.foods[0].nf_sodium,
  fat: raw.foods[0].nf_total_fat,
  protein: raw.foods[0].nf_protein,
  fiber: raw.foods[0].nf_dietary_fiber,
  fat_saturated: raw.foods[0].nf_saturated_fat,
  calories: raw.foods[0].nf_calories,
  raw: raw.foods[0],
  full_nutrients: null
});
