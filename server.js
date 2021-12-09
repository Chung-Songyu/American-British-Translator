const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/api.js');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
  });

userRoutes(app);
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const portNum = 3000;
app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
});

module.exports = app;
