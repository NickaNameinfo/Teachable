const express = require("express");
const router = express.Router();

const feedbackController = require("../controllers/feedback");

router.get("/", feedbackController.findAll);
router.get("/:id", feedbackController.findById);
router.post("/", feedbackController.create);
router.put("/:id", feedbackController.updateById);
router.delete("/:id", feedbackController.deleteById);
router.get("/courseId/:courseId", feedbackController.findByCourseId);

module.exports = router;
