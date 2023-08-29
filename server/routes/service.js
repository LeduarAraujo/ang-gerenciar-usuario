const express = require('express');
const { response } = require('../app');
const router = express.Router();


router.get('/servico', (req, res) => {

  var url = '';
  var axios = require('axios');
  var fs = require('fs');

  var { parseString } = require('xml2js');

  axios.get(url).then((response) => {
    parseString(response.data, (err, jsonBody) => {
      res.status(200).json({"mesage": "susess"});
    });
  }).catch( err => res.status(500).json(err));
});

module.exports = router;
