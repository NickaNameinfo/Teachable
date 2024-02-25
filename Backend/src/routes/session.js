const express = require("express");
const router = express.Router();

const sessionController = require("../controllers/session");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploads = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
}).fields([{ name: "sessionUrl" }]);

router.get("/", sessionController.findAll);
router.get("/:id", sessionController.findById);
router.post("/", uploads, sessionController.create);
router.put("/:id", uploads, sessionController.updateById);
router.delete("/:id", sessionController.deleteById);
router.get("/courseId/:courseId", sessionController.findByCourseId);

module.exports = router;
