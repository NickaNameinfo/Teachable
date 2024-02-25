const { Op } = require("sequelize");

const { Watchlists } = require("../models/index");

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

const checkoutService = {
  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.sessionTitle = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Watchlists.findAndCountAll({
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
  findByCourseId: (courseId) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Watchlists.findAll({
          where: {
            course_id: courseId,
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
      try {
        const createdSession = await Watchlists.create(body);
        resolve(createdSession);
      } catch (error) {
        if (error instanceof BadRequestException) {
          // Handle BadRequestException
          reject(error);
        } else {
          // Handle other errors
          console.error("Error creating session:", error);
          reject(new InternalServerErrorException("Internal Server Error"));
        }
      }
    }),
  updateById: (id, body) =>
    new Promise(async (resolve, reject) => {
      try {
        const Watchlists = await Watchlists.findByPk(id);
        if (!Watchlists) throw new NotFoundException("Not found Watchlists!");

        const data = await Watchlists.update(body, {
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
        const Watchlists = await Watchlists.findByPk(id);
        if (!Watchlists) throw new NotFoundException("Not found Watchlists!");

        const data = await Watchlists.destroy({
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
