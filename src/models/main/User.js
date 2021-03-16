module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        token: {
            type: DataTypes.STRING(255)
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'tbUsers'
    })

    user.associate = (models) => {
        user.belongsTo(models.Company, {
            foreignKey: 'id',
            as: 'company'
        });
    };

    return user
}