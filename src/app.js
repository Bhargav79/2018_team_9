import express from 'express';
import nutritionalScoreHandler from './nutritionalScoreHandler';

const app = express();

app.get('/', nutritionalScoreHandler);

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
