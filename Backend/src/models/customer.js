"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Address, {
        sourceKey: "id",
        foreignKey: "customerId",
        as: "addresses",
      });
    }
  }
  Customer.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
      },
      fullName: {
        type: DataTypes.STRING,
        field: "full_name",
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: "phone_number",
      },
      userName: {
        type: DataTypes.STRING,
        field: "user_name",
      },
      password: {
        type: DataTypes.STRING,
        field: "passowrd",
      },
    },
    {
      sequelize,
      modelName: "Customer",
      timestamps: true,
      underscored: true,
      defaultScope: {
        // exclude hash by default
        attributes: { exclude: ["password"] },
      },
      scopes: {
        // include hash with this scope
        withHash: { attributes: {} },
      },
    }
  );
  return Customer;
};
