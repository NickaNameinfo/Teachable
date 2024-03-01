const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "u490757224_nickteachable",
  "u490757224_nickteachableu",
  "[a?yi[5Cw",
  {
    host: "nicknameinfotech.com",
    dialect: "mysql",
    logging: false,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
