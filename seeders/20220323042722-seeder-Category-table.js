'use strict';
const DataCategory = require('../data/categories.json')

module.exports = {
  async up(queryInterface, Sequelize) {
    DataCategory.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    await queryInterface.bulkInsert('Categories', DataCategory)
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});
  }
};
