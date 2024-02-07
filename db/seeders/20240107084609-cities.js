const fs = require('fs').promises;
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cities = JSON.parse(await fs.readFile(path.join(__dirname, '..', 'cities.json'), 'utf-8'));

    await queryInterface.bulkInsert(
      'Cities',
      cities.map((el) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
