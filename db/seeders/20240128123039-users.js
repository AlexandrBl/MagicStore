/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash('admin', 10);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin',
        password: hash,
        city_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
