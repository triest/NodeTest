var express = require('express');
var router = express.Router();

const starWarsController = require("../controllers/StarWarsController.js");

router.get("/planets", starWarsController.index);

module.exports = router;
