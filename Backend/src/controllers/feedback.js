const feedbackService = require("../services/feedback");

const sessionController = {
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 5000,
        orderBy = "name",
        sortBy = "asc",
        keyword,
      } = req.query;

      const data = await feedbackService.findAll({
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
      const data = await feedbackService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  findByCourseId: async (req, res, next) => {
    try {
      const { courseId } = req.params;
      const data = await feedbackService.findByCourseId(courseId);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.body, "test123412341234");
    try {
      let inputData = {
        ...req.body,
      };
      const data = await feedbackService.create(inputData);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  updateById: async (req, res, next) => {
    try {
      const { id } = req.params;
      let inputData = {
        ...req.body,
      };
      const data = await feedbackService.updateById(id, inputData);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await feedbackService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = sessionController;
