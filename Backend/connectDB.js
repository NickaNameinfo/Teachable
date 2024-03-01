const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("apelixco_Teachable", "apelixco_Teachh", "apelixco_Teachh@+", {
  host: "www.krosum.com",
  dialect: "mysql",
  logging: false,
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
