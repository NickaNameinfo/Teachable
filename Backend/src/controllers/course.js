const courseService = require("../services/course");
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
const courseController = {
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 5000,
        orderBy = "courseTitle",
        sortBy = "asc",
        keyword,
      } = req.query;

      const data = await courseService.findAll({
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
      const data = await courseService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.files, req.body, "asdfasdfasd");
    const { originalname, buffer } = req.file;
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
        uploadCourse: url,
      };
      const data = await courseService.create(inputData);
      return res.json({ success: true, data });
    } catch (error) {
      return res.json({ success: false, error: "Course create failed." });
    }
  },
  updateById: async (req, res, next) => {
    const { originalname, buffer } = req.file;
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
      const { id } = req.params;
      let inputData = {
        ...req.body,
        uploadCourse: url,
      };
      const data = await courseService.updateById(id, inputData);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await courseService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = courseController;
