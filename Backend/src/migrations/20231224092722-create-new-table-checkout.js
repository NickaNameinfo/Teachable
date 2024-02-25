"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("chekouts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING,
        field: "first_name",
      },
      lastName: {
        type: Sequelize.STRING,
        field: "last_name",
      },
      emailId: {
        type: Sequelize.STRING,
        field: "email_id",
      },
      address: {
        type: Sequelize.STRING,
        field: "address",
      },
      city: {
        type: Sequelize.STRING,
        field: "city",
      },
      zipCode: {
        type: Sequelize.STRING,
        field: "zip_code",
      },
      courseName: {
        type: Sequelize.STRING,
        field: "course_name",
      },
      subTotal: {
        type: Sequelize.STRING,
        field: "sub_total",
      },
      paymentType: {
        type: Sequelize.STRING,
        field: "payment_type",
      },
      paymentStatus: {
        type: Sequelize.STRING,
        field: "payment_status",
      },
      courseId: {
        type: Sequelize.STRING,
        field: "course_id",
      },
      userName: {
        type: Sequelize.STRING,
        field: "user_name",
      },
      customerId: {
        type: Sequelize.UUID,
        field: "customer_id",
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

  down: async (queryInterface, Sequelize) => {
    // Step 1: Drop the new table
    await queryInterface.dropTable("chekouts");
  },
};
