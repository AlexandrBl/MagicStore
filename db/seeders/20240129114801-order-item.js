/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      {
        product_id: 1,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  },
};
