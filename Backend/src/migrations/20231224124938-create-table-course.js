"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("courses", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      courseTitle: {
        type: Sequelize.STRING,
        field: "full_name",
      },
      courseCategory: {
        type: Sequelize.STRING,
        field: "couse_category",
      },
      coursePrice: {
        type: Sequelize.STRING,
        field: "course_price",
      },
      discountPrice: {
        type: Sequelize.STRING,
        field: "discount_price",
      },
      courseName: {
        type: Sequelize.STRING,
        field: "course_name",
      },
      courseOffer: {
        type: Sequelize.STRING,
        field: "course_Offer",
      },
      aboutCourse: {
        type: Sequelize.STRING,
        field: "about_course",
      },
      uploadCourse: {
        type: Sequelize.STRING,
        field: "upload_course",
      },
      introVideo: {
        type: Sequelize.STRING,
        field: "intro_video",
      },
      startData: {
        type: Sequelize.STRING,
        field: "start_date",
      },
      language: {
        type: Sequelize.STRING,
        field: "language",
      },
      courseRequirements: {
        type: Sequelize.STRING,
        field: "course_requirements",
      },
      description: {
        type: Sequelize.STRING,
        field: "description",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "create_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("courses");
  },
};
