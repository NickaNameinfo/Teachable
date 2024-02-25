"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Watchlists", {
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
      sessionId: {
        type: Sequelize.STRING,
        field: "session_id",
      },
      customerId: {
        type: Sequelize.UUID,
        field: "customer_id",
        references: {
          model: "customers",
          key: "id",
        },
      },
      sessionNumber: {
        type: Sequelize.STRING,
        field: "session_number",
      },
      sessionTitle: {
        type: Sequelize.STRING,
        field: "session_title",
      },
      sessionStatus: {
        type: Sequelize.STRING,
        field: "session_status",
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
    await queryInterface.dropTable("Watchlists");
  },
};
