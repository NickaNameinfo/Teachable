"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("courses", "course_status", {
      type: Sequelize.STRING,
      allowNull: false, // Set to false if you want to disallow null values
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("courses", "course_status");
  },
};
