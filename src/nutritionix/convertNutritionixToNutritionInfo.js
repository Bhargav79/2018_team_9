export default async (raw) => ({
  sugar: raw.foods[0].nf_sugars,
  sodium: raw.foods[0].nf_sodium,
  fat: raw.foods[0].nf_total_fat,
});
