import rules from './rules';
import fetchInfo from './nutritionix/fetchNutritionInfo';
export default async (req, res) => {
  const upc = req.query.upc;
  const category = req.query.category;
  const subCategory = req.query.subCategory;
  const nutritionalInfo = await fetchInfo(upc);
  const score = rules({
    ...nutritionalInfo,
    subCategory,
    category
  });
  res.send({
    score,
    upc,
    category,
    subCategory,
    nutritionalInfo
  });
};
