const { Op } = require("sequelize");

const { Sessions } = require("../models/index");

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

        if (orderBy && orderBy === "created_at") {
          queries.order = [["created_at", "ASC"]]; // sortBy should be 'ASC' or 'DESC'
        }

        const data = await Sessions.findAndCountAll({
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
        const data = await Sessions.findAll({
          where: {
            course_id: courseId,
          },
          order: [["created_at", "ASC"]], // Order by created_at in ASC
        });

        if (!data || data.length === 0) {
          throw new NotFoundException(
            "Session not found for the given course ID!"
          );
        }

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  create: (body) =>
    new Promise(async (resolve, reject) => {
      try {
        const session = await Sessions.findOne({
          where: { session_title: body.sessionTitle },
        });

        if (session) {
          throw new BadRequestException(
            `Session ${body?.sessionTitle} already exists`
          );
        }

        const createdSession = await Sessions.create(body);
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
        const Sessions = await Sessions.findByPk(id);
        if (!Sessions) throw new NotFoundException("Not found Sessions!");

        const data = await Sessions.update(body, {
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
        const Sessions = await Sessions.findByPk(id);
        if (!Sessions) throw new NotFoundException("Not found Sessions!");

        const data = await Sessions.destroy({
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
