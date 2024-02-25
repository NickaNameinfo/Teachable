"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Rename the column
    await queryInterface.renameColumn("courses", "full_name", "course_title");

    // Change the column type
    await queryInterface.changeColumn("courses", "course_title", {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the column type
    await queryInterface.changeColumn("courses", "course_title", {
      type: Sequelize.STRING,
    });

    // Revert the column name
    await queryInterface.renameColumn("courses", "course_title", "full_name");
  },
};
