module.exports = function (sequelize, DataTypes) {
    const Department = sequelize.define('Department', {
        department_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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

    //Department is parent, and Product is child
    Department.associate = function(models) {
    
        Department.hasMany(models.Product, {
          onDelete: 'cascade'
        });
      };

    return Department;
}