const { Op } = require("sequelize");

const { Feedbacks } = require("../models/index");

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

const feedbackService = {
  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.name = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Feedbacks.findAndCountAll({
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
        const data = await Feedbacks.findAll({
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
        const createdSession = await Feedbacks.create(body);
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
        const Feedbacks = await Feedbacks.findByPk(id);
        if (!Feedbacks) throw new NotFoundException("Not found Feedbacks!");

        const data = await Feedbacks.update(body, {
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
        const Feedbacks = await Feedbacks.findByPk(id);
        if (!Feedbacks) throw new NotFoundException("Not found Feedbacks!");

        const data = await Feedbacks.destroy({
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

module.exports = feedbackService;
