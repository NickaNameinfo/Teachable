const courseService = require("../services/course");

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
        page: +page ? + page : 1,
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
    let inputData = {
      ...req.body,
      uploadCourse: req?.files?.uploadCourse?.[0]?.path,
    };
    try {
      const data = await courseService.create(inputData);
      return res.json({ success: true, data });
    } catch (error) {
      return res.json({ success: false, error: "Course create failed." });
    }
  },
  updateById: async (req, res, next) => {
    try {
      const { id } = req.params;
      let inputData = {
        ...req.body,
        uploadCourse: req?.files?.uploadCourse?.[0]?.path,
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
