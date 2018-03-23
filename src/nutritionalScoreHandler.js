import rules from './rules';
import fetchInfo from './getNutritionalInformation';
export default async (req, res) => {
  const upc = req.query.upc;

  //Call nutrition orchestration to pull data from usda or nutrix apis
  const nutritionalInfo = await fetchInfo(upc);

  //Call the rules engine, retrieve score and send back to calling application
  res.send({
    nutritionalInfo,
    query: req.query,
    upc
  });
};
