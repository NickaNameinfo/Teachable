const checkoutService = require("../services/checkout");

const checkoutController = {
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 5000,
        orderBy = "courseName",
        sortBy = "asc",
        keyword,
      } = req.query;

      const data = await checkoutService.findAll({
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
      const data = await checkoutService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  findByCourseId: async (req, res, next) => {
    try {
      const { courseId,  customerId} = req.params;
      const data = await checkoutService.findByCourseId(courseId, customerId);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.body, "test123412341234");
    try {
      const data = await checkoutService.create(req.body);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  updateById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await checkoutService.updateById(id, req.body);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await checkoutService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = checkoutController;
