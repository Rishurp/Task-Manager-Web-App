const express = require("express");
const { taskController } = require("../controllers");
const upload = require("../config/multerConfig");

const router = express.Router();

router.get("/", taskController.getTask);
router.post("/", upload.single("pdf"), (req, res, next) => {
    console.log('File received:', req.file); 
    next();
  }, taskController.addTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id",taskController.deleteTask);

module.exports = router;
