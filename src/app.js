import express from 'express';
import rules from './rules';
import fetch from './fetchInfo';

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
