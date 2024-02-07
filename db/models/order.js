const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, OrderItem,
    }) {
      this.hasMany(OrderItem, { foreignKey: 'order_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Order.init({
    status: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
