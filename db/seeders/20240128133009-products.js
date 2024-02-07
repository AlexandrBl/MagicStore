/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'card 1',
        price: '10',
        img: '/img/iphone13.jpg',
        condition: 'norm',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
