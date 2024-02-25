"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clarifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clarifications.belongsTo(models.Customer, {
        targetKey: "id",
        foreignKey: "customerId",
        as: "customer",
      });
    }
  }
  Clarifications.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      courseId: {
        type: DataTypes.STRING,
        field: "course_id",
      },
      sessionId: {
        type: DataTypes.STRING,
        field: "session_id",
      },
      customerId: {
        type: DataTypes.UUID,
        field: "customer_id",
        references: {
          model: "customers",
          key: "id",
        },
      },
      sessionNumber: {
        type: DataTypes.STRING,
        field: "session_number",
      },
      sessionTitle: {
        type: DataTypes.STRING,
        field: "session_title",
      },
      sessionStatus: {
        type: DataTypes.STRING,
        field: "session_status",
      },
      commits: {
        type: DataTypes.STRING,
        field: "commits",
      },
      name: {
        type: DataTypes.STRING,
        field: "name",
      },
      email: {
        type: DataTypes.STRING,
        field: "email",
      },
      courseName: {
        type: DataTypes.STRING,
        field: "course_name",
      },
    },
    {
      sequelize,
      modelName: "Clarifications",
      timestamps: true,
      underscored: true,
    }
  );
  return Clarifications;
};