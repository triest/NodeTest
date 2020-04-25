var express = require('express');
var router = express.Router();

const taskController = require("../controllers/taskController.js");

const taskFilter = require("../controllers/taskfilter.js");

/* GET users listing. */
router.get("/", taskController.index);
router.get('/:id', taskController.get);
router.post('/',taskController.create);

module.exports = router;
