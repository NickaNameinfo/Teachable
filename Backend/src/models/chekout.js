"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chekout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chekout.belongsTo(models.Customer, {
        foreignKey: "customerId",
        targetKey: "id",
        as: "customer",
      });
    }
  }
  Chekout.init(
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
      emailId: {
        type: DataTypes.STRING,
        field: "email_id",
      },
      address: {
        type: DataTypes.STRING,
        field: "address",
      },
      city: {
        type: DataTypes.STRING,
        field: "city",
      },
      zipCode: {
        type: DataTypes.STRING,
        field: "zip_code",
      },
      courseName: {
        type: DataTypes.STRING,
        field: "course_name",
      },
      subTotal: {
        type: DataTypes.STRING,
        field: "sub_total",
      },
      paymentType: {
        type: DataTypes.STRING,
        field: "payment_type",
      },
      paymentStatus: {
        type: DataTypes.STRING,
        field: "payment_status",
      },
      courseId: {
        type: DataTypes.STRING,
        field: "course_id",
      },
      userName: {
        type: DataTypes.STRING,
        field: "user_name",
      },
      customerId: {
        type: DataTypes.UUID,
        field: "customer_id",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Chekout",
      timestamps: true,
      underscored: true,
    }
  );
  return Chekout;
};
