const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ City, Order, Product }) {
      this.belongsTo(City, { foreignKey: "city_id" });
      this.hasMany(Order, { foreignKey: "user_id" });
      this.hasMany(Product, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      city_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Cities",
          key: "id",
        },
        onDelete: "Cascade",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
