export default async (raw) => ({
  sugar: raw.foods[0].nf_sugars,
  sodium: raw.foods[0].nf_sodium,
  fat: raw.foods[0].nf_total_fat,
  protein: raw.foods[0].nf_protein,
  fiber: raw.foods[0].nf_dietary_fiber,
  ...raw.foods[0],
  full_nutrients: null
});
