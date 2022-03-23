'use strict';
const dataUser = require('../data/users.json')
const { hasPassword } = require('../helper/bcrypt')
module.exports = {
  async up(queryInterface, Sequelize) {
    dataUser.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      el.password = hasPassword(el.password)
    });
    await queryInterface.bulkInsert('Users', dataUser)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
