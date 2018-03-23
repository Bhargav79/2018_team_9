import rules from './rules';
import fetchInfo from './getNutritionalInformation';
export default async (req, res) => {
  const upc = req.query.upc;
  const category = req.query.category;
  const subCategory = req.query.subCategory;
  
  //Call nutrition orchestration to pull data from usda or nutrix apis
  const nutritionalInfo = await fetchInfo(upc);
  
  //Call the rules engine, retrieve score and send back to calling application
  /*const score = await rules({
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
  });*/
  res.send({nutritionalInfo});
};
