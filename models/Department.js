module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('Department', {
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                len:[1, 5]
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
        over_head_costs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        }
    });

    return Department;
}