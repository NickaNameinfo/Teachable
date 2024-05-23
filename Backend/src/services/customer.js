const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { Customer, Address } = require("../models/index");
const bcrypt = require("bcryptjs");

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

function omitHash(user) {
  console.log(user, "user12341234");
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}

const customerService = {
  authenticate: (body) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Customer.scope("withHash").findOne({
          where: { userName: body?.userName },
        });
        if (!data) throw new NotFoundException("Not found customer!");
        bcrypt.compare(body.password, data.password, function (err, result) {
          if (result) {
            let secret =
              "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";
            const token = jwt.sign({ sub: data.id }, secret, {
              expiresIn: "1d",
            });
            resolve({ ...omitHash(data.get()), token });
          } else {
            return resolve({ error: true });
          }
        });
      } catch (error) {
        reject(error);
      }
    }),

  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.email = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Customer.findAndCountAll({
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
        const data = await Customer.findByPk(id, {
          include: [{ model: Address, as: "addresses" }],
        });
        if (!data) throw new NotFoundException("Not found customer!");

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  create: (body) =>
    new Promise(async (resolve, reject) => {
      console.log(body, "body2341234213");
      try {
        const existingCustomerByEmail = await Customer.findOne({
          where: { email: body?.email },
        });

        // Check if a customer with the provided userName already exists
        const existingCustomerByUserName = await Customer.findOne({
          where: { userName: body?.userName },
        });

        if (existingCustomerByEmail) {
          throw new BadRequestException(`Email ${body?.email} already exists`);
        }

        if (existingCustomerByUserName) {
          throw new BadRequestException(
            `User Name ${body?.userName} already exists`
          );
        }

        const data = await Customer.create(body, {
          include: [{ model: Address, as: "addresses" }],
        });

        resolve(data);
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
  addNewAddress: (customerId, { city, state, street, zipcode }) =>
    new Promise(async (resolve, reject) => {
      try {
        const customer = await Customer.findByPk(customerId);
        if (!customer) throw new NotFoundException("Not found customer!");

        const data = await Address.create({
          city,
          state,
          street,
          zipcode,
          customerId,
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  updateById: (id, body) =>
    new Promise(async (resolve, reject) => {
      try {
        const customer = await Customer.findByPk(id);
        if (!customer) throw new NotFoundException("Not found customer!");

        const data = await Customer.update(body, {
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
        const customer = await Customer.findByPk(id);
        if (!customer) throw new NotFoundException("Not found customer!");

        const data = await Customer.destroy({
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  resetPassword: (userName, newPassword) =>
    new Promise(async (resolve, reject) => {
      try {
        const hashedPassword = bcrypt.hashSync(
          newPassword,
          bcrypt.genSaltSync(10)
        );
        await Customer.update(
          { password: hashedPassword },
          { where: { userName } }
        );
        resolve({ message: "Password has been reset." });
      } catch (error) {
        reject(error);
      }
    }),
};

module.exports = customerService;
