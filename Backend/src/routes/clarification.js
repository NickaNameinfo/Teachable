const express = require("express");
const router = express.Router();

const clarificationController = require("../controllers/clarification");

router.get("/", clarificationController.findAll);
router.get("/:id", clarificationController.findById);
router.post("/", clarificationController.create);
router.put("/:id", clarificationController.updateById);
router.delete("/:id", clarificationController.deleteById);
router.get("/courseId/:courseId", clarificationController.findByCourseId);

module.exports = router;
