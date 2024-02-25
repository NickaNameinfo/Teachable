const customerService = require("../services/customer");
const bcrypt = require("bcryptjs");
const customerController = {
  authenticate: async (req, res, next) => {
    console.log(req.body, "bodyweqrqwe3124332");
    try {
      const data = await customerService.authenticate(req.body);
      return res.json({ success: true, data });
    } catch (error) {
      console.error("Authentication Error:", error);
      return res.json({ success: false, error: "Authentication failed." });
    }
  },

  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 5000,
        orderBy = "email",
        sortBy = "asc",
        keyword,
      } = req.query;

      const data = await customerService.findAll({
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
      const data = await customerService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.body, "sdfasd231423");
    try {
      let tempData = {
        ...req.body,
        password: await bcrypt.hash(req?.body?.password, 10),
        addresses: [],
      };
      const data = await customerService.create(tempData);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  addNewAddress: async (req, res, next) => {
    try {
      const { city, state, street, zipcode } = req.body;
      const { id } = req.params;
      const data = await customerService.addNewAddress(id, {
        city,
        state,
        street,
        zipcode,
      });
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  updateById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await customerService.updateById(id, req.body);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await customerService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = customerController;
