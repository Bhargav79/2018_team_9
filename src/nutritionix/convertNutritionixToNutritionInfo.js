export default async (raw) => ({
  sugar: raw.nf_sugars,
  sodium: raw.nf_sodium,
  fat: raw.nf_total_fat,
});
