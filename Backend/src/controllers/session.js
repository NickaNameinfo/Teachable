const sessionService = require("../services/session");
const sharp = require("sharp");
const aws = require("aws-sdk");
const BUCKET_NAME = "krosume";
const s3 = new aws.S3();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  region: "ap-south-1", // Replace with your AWS region
  credentials: {
    accessKeyId: "AKIAY55VZUUB7ZDB7JTP",
    secretAccessKey: "GWRlhht3W4ZNsQ3c5mc2yv839XsG+i6uT6F/1ti2",
  },
});

const sessionController = {
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 5000,
        orderBy = "sessionTitle",
        sortBy = "asc",
        keyword,
      } = req.query;

      const data = await sessionService.findAll({
        page: +page ? +page : 1,
        limit: +limit ? +limit : 3,
        orderBy,
        sortBy,
        keyword,
      });
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      // console.log(id, "seesionIdss")
      const data = await sessionService.findById(id);
      // console.log(data, "responssdata")
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  findByCourseId: async (req, res, next) => {
    try {
      const { courseId } = req.params;
      const data = await sessionService.findByCourseId(courseId);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.body, "test123412341234");
    const { originalname, buffer } = req?.file;
    const uploadParams = {
      Bucket: BUCKET_NAME, // Replace with your S3 bucket name
      Key: originalname,
      Body: buffer,
    };

    try {
      const uploadCommand = new PutObjectCommand(uploadParams);
      const result = await s3Client.send(uploadCommand);
      const url = `https://${BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${originalname}`;
      console.log("File uploaded successfully:", url);
      let inputData = {
        ...req.body,
        sessionUrl: url,
      };
      const data = await sessionService.create(inputData);
      return res.json({ success: true, data });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ success: false, message: "Error uploading file" });
    }
  },
  updateById: async (req, res, next) => {
    // const { originalname, buffer } = req?.file;
    // // Compress image using sharp without changing quality
    // const compressedBuffer = await sharp(buffer).toBuffer();
    // const uploadParams = {
    //   Bucket: BUCKET_NAME, // Replace with your S3 bucket name
    //   Key: originalname,
    //   Body: compressedBuffer,
    // };

    try {
      // const uploadCommand = new PutObjectCommand(uploadParams);
      // const result = await s3Client.send(uploadCommand);
      // const url = `https://${BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${originalname}`;
      // console.log("Filestuts:", url);
      const { id } = req.params;
      let inputData = {
        ...req.body,
      };
      const data = await sessionService.updateById(id, inputData);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await sessionService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = sessionController;
