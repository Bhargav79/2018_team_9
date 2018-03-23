import express from 'express';
import rules from './rules';
import fetchInfo from './fetchInfo';

const app = express();
const handler = async (req, res) => {
  const upc = req.query.upc;
  const category = req.query.category;
  const subCategory = req.query.subCategory;
  const nutritionalInfo = await fetchInfo(upc);
  const score = rules({ ...nutritionalInfo,
    subCategory,
    category
  });
  res.send({
    score,
    upc,
    category,
    subCategory
  });
};

app.get('/', handler);

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
