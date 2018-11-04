module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
            notNull: true,
            notEmpty: true,
            len: [1,20]
        }
      },
      department_name: {
        type: DataTypes.STRING,
        allowNull: false,
        VALIDATE: {
            isAlpha: true,
            notNull: true,
            notEmpty: true,
            len: [1,20]
        }
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
            notNull: true
        }
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notNull: true
        }
      }
    });

    return Product;
  }