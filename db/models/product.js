const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, OrderItem }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(OrderItem, { foreignKey: 'orderItem_id' });
    }
  }
  Product.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      condition: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'Cascade',
      },

    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
