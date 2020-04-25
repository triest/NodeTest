var express = require('express');
var router = express.Router();

const taskController = require("../controllers/taskController.js");
const filter = require("../controllers/filter.js");
const taskFilter = require("../controllers/taskfilter.js");

/* GET users listing. */
router.get("/", taskController.index);
router.get('/:id', taskController.get);
router.post('/',taskFilter.validateName(),taskFilter.validatedeginAt(),taskFilter.validatStatusId() ,taskController.create);

module.exports = router;
