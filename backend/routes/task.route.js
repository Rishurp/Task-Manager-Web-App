const express = require("express");
const {taskController } = require("../controllers")

const router = express.Router();

router.get("/", taskController.getTask)
router.post("/",taskController.addTask);

module.exports = router;