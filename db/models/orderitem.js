const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Order }) {
      this.hasMany(Product, { foreignKey: 'product_id' });
      this.belongsTo(Order, { foreignKey: 'order_id' });
    }
  }
  OrderItem.init({
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        kei: 'id',
      },
      onDelete: 'Cascade',
    },
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        kei: 'id',
      },
      onDelete: 'Cascade',
    },
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};
