'use strict';
const dataDonation = require('../data/Donations.json')

module.exports = {
  async up(queryInterface, Sequelize) {
    dataDonation.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    await queryInterface.bulkInsert('Donations', dataDonation)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Donations', null, {});
  }
};
