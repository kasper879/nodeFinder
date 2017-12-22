var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

//var {Product} = require('../Model/product');

module.exports = router;

router.get('/info', (req, res) => {
        res.send('How to create a basic express alplikation with node');
    }, (e) => {
        res.status(400).send(e);
    });