var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController.js");
const filter = require("../controllers/filter.js");

/* GET users listing. */
router.get("/", userController.index);

module.exports = router;
