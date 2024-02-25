"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sessions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      courseId: {
        type: Sequelize.STRING,
        field: "course_id",
      },
      sessionUrl: {
        type: Sequelize.STRING,
        field: "session_url",
      },
      sessionTime: {
        type: Sequelize.STRING,
        field: "session_time",
      },
      sessionTitle: {
        type: Sequelize.STRING,
        field: "session_title",
      },
      customerId: {
        type: Sequelize.UUID,
        field: "customer_id",
        references: {
          model: "customers",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Sessions");
  },
};
