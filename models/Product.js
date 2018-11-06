module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,50]
        }
      },
      department_name: {
        type: DataTypes.STRING,
        allowNull: false,
        VALIDATE: {
            isAlpha: true,
            len: [1,20]
        }
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
        }
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
        }
      }
    });

    return Product;
  }