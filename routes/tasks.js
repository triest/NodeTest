var express = require('express');
var router = express.Router();

const taskController = require("../controllers/taskController.js");
const filter = require("../controllers/filter.js");

/* GET users listing. */
router.get("/", taskController.index);


module.exports = router;
