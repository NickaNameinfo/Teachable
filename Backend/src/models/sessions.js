"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sessions.belongsTo(models.Customer, {
        targetKey: "id",
        foreignKey: "customerId",
        as: "customer",
      });
    }
  }
  Sessions.init(
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
      sessionUrl: {
        type: DataTypes.STRING,
        field: "session_url",
      },
      sessionTime: {
        type: DataTypes.STRING,
        field: "session_time",
      },
      sessionTitle: {
        type: DataTypes.STRING,
        field: "session_title",
      },
      customerId: {
        type: DataTypes.UUID,
        field: "customer_id",
        field: "id",
      },
    },
    {
      sequelize,
      modelName: "Sessions",
      timestamps: true,
      underscored: true,
    }
  );
  return Sessions;
};
