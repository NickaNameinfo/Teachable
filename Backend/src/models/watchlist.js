"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Watchlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Watchlists.belongsTo(models.Customer, {
        targetKey: "id",
        foreignKey: "customerId",
        as: "customer",
      });
    }
  }
  Watchlists.init(
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
    },
    {
      sequelize,
      modelName: "Watchlists",
      timestamps: true,
      underscored: true,
    }
  );
  return Watchlists;
};
