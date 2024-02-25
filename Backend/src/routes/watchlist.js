const express = require("express");
const router = express.Router();

const watchlistController = require("../controllers/watchlist");

router.get("/", watchlistController.findAll);
router.get("/:id", watchlistController.findById);
router.post("/", watchlistController.create);
router.put("/:id", watchlistController.updateById);
router.delete("/:id", watchlistController.deleteById);
router.get("/courseId/:courseId", watchlistController.findByCourseId);

module.exports = router;
