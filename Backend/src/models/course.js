"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.Customer, {
        targetKey: "id",
        foreignKey: "id",
        as: "customer",
      });
    }
  }
  Course.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      courseTitle: {
        type: DataTypes.STRING,
        field: "course_title",
      },
      courseCategory: {
        type: DataTypes.STRING,
        field: "couse_category",
      },
      coursePrice: {
        type: DataTypes.STRING,
        field: "course_price",
      },
      discountPrice: {
        type: DataTypes.STRING,
        field: "discount_price",
      },
      courseName: {
        type: DataTypes.STRING,
        field: "course_name",
      },
      courseOffer: {
        type: DataTypes.STRING,
        field: "course_Offer",
      },
      aboutCourse: {
        type: DataTypes.STRING,
        field: "about_course",
      },
      uploadCourse: {
        type: DataTypes.STRING,
        field: "upload_course",
      },
      introVideo: {
        type: DataTypes.STRING,
        field: "intro_video",
      },
      startData: {
        type: DataTypes.STRING,
        field: "start_date",
      },
      language: {
        type: DataTypes.STRING,
        field: "language",
      },
      courseRequirements: {
        type: DataTypes.STRING,
        field: "course_requirements",
      },
      description: {
        type: DataTypes.STRING,
        field: "description",
      },
      courseStatus: {
        type: DataTypes.STRING,
        field: "course_status",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "create_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Course",
      timestamps: true,
      underscored: true,
    }
  );
  return Course;
};
