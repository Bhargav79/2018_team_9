import express from 'express';
import nutritionalScoreHandler from './nutritionalScoreHandler';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', nutritionalScoreHandler);

const port = process.env.PORT || 3000;


app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
