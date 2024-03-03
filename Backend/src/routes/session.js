const express = require("express");
const router = express.Router();

const sessionController = require("../controllers/session");
const path = require("path");
const aws = require("aws-sdk");
const multer = require("multer");
const sharp = require("sharp");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// const s3Client = new S3Client({
//   region: "ap-south-1", // Replace with your AWS region
//   credentials: {
//     accessKeyId: "AKIAY55VZUUB7ZDB7JTP",
//     secretAccessKey: "GWRlhht3W4ZNsQ3c5mc2yv839XsG+i6uT6F/1ti2",
//   },
// });

// aws.config.update({
//   secretAccessKey: "GWRlhht3W4ZNsQ3c5mc2yv839XsG+i6uT6F/1ti2",
//   accessKeyId: "AKIAY55VZUUB7ZDB7JTP",
//   region: "ap-south-1",
//   // Note: 'bucket' is not a valid AWS SDK configuration property
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const BUCKET_NAME = "krosume";
const s3 = new aws.S3();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./src/uploads");
//   },
//   filename: function (req, file, cb) {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

const uploads = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
}).fields([{ name: "sessionUrl" }]);

// const s3upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: BUCKET_NAME,
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       // cb(null, Date.now().toString())
//       cb(null, file.originalname);
//     },
//   }),
// });

//krosume.s3.ap-south-1.amazonaws.com/WIN_20240215_11_14_38_Pro.jpg

// https: router.post("/s3uploads", upload.single("file"), async (req, res) => {
//   const { originalname, buffer } = req.file;

//   // Compress image using sharp without changing quality
//   const compressedBuffer = await sharp(buffer).toBuffer();

//   const uploadParams = {
//     Bucket: BUCKET_NAME, // Replace with your S3 bucket name
//     Key: originalname,
//     Body: compressedBuffer,
//   };

//   try {
//     const uploadCommand = new PutObjectCommand(uploadParams);
//     const result = await s3Client.send(uploadCommand);
//     const url = `https://${BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${originalname}`;
//     console.log("File uploaded successfully:", url);
//     res.json({ success: true, message: "File uploaded successfully" });
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     res.status(500).json({ success: false, message: "Error uploading file" });
//   }
// });

router.get("/", sessionController.findAll);
router.get("/:id", sessionController.findById);
router.post("/", upload.single("sessionUrl"), sessionController.create);
router.put("/:id", upload.single("sessionUrl"), sessionController.updateById);
router.delete("/:id", sessionController.deleteById);
router.get("/courseId/:courseId", sessionController.findByCourseId);

module.exports = router;
