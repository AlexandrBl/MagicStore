/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash('admin', 10);
    const userHash = await bcrypt.hash('1234', 10);
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'admin',
          email: 'admin',
          password: hash,
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Iosif',
          email: 'Stalin@mail.ru',
          password: userHash,
          city_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Max',
          email: 'Maksimus@mail.ru',
          password: userHash,
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Arnold',
          email: 'Shwarz@mail.ru',
          password: userHash,
          city_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Alla',
          email: 'Puga4@mail.ru',
          password: userHash,
          city_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Dima',
          email: 'Master2@mail.ru',
          password: userHash,
          city_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Katya',
          email: 'Spb@mail.ru',
          password: userHash,
          city_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Vasya',
          email: 'Pupkin@mail.ru',
          password: userHash,
          city_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Ivan',
          email: 'Ivanov@mail.ru',
          password: userHash,
          city_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Timati',
          email: 'glee@mail.ru',
          password: userHash,
          city_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
