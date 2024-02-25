const { Op } = require("sequelize");

const { Chekout } = require("../models/index");

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

const checkoutService = {
  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.course_name = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Chekout.findAndCountAll({
          where: query,
          ...queries,
        });

        const res = {
          totalPages: Math.ceil(data?.count / limit),
          totalItems: data?.count,
          data: data?.rows,
        };

        resolve(res);
      } catch (error) {
        reject(error);
      }
    }),
  findById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Chekout.findByPk(id);
        if (!data) throw new NotFoundException("Not found Chekout!");

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  findByCourseId: (courseId, customerId) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Chekout.findAll({
          where: {
            course_id: courseId,
            customer_id: customerId,
          },
        });

        if (!data)
          throw new NotFoundException(
            "Session not found for the given course ID!"
          );

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  create: (body) =>
    new Promise(async (resolve, reject) => {
      console.log(body, "body2431234");
      try {
        const data = await Chekout.create(body);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  updateById: (id, body) =>
    new Promise(async (resolve, reject) => {
      try {
        const Chekout = await Chekout.findByPk(id);
        if (!Chekout) throw new NotFoundException("Not found Chekout!");

        const data = await Chekout.update(body, {
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  deleteById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const Chekout = await Chekout.findByPk(id);
        if (!Chekout) throw new NotFoundException("Not found Chekout!");

        const data = await Chekout.destroy({
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
};

module.exports = checkoutService;
