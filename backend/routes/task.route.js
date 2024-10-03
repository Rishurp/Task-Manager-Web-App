const express = require("express");
const { taskController } = require("../controllers");

const router = express.Router();

router.get("/", taskController.getTask);
router.post("/", taskController.addTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id",taskController.deleteTask);

module.exports = router;
