const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 3000;

// Rotas
const router = require('./route/service');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/service/', router);


app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});

module.exports = app;
