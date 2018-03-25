import fetchInfo from './getNutritionalInformation';
export default async (req, res) => {
  const upc = req.query.upc;

  //Call nutrition orchestration to pull data
  const nutritionalInfo = await fetchInfo(upc);

  res.send({
    nutritionalInfo,
    query: req.query,
    upc
  });
};
