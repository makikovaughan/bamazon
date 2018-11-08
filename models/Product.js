module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 80]
            }
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false,
            VALIDATE: {
                isAlpha: true,
                len: [1, 20]
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
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            VALIDATE: {
                len: [1, 100]
            }
        },
        product_sales: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            VALIDATE: {
                isDecimal: true
            }
        }
    });

    Product.associate = function(models) {
    
       //Product is child and Department is parent
        Product.belongsTo(models.Department, {
          foreignKey: {
            allowNull: false
          },
          onDelete: 'cascade'
        });
      };

    return Product;
}