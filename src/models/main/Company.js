module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'tbCompanies'
    })

    company.associate = (models) => {
        company.hasOne(models.User, {
            foreignKey: 'company_id',
            as: 'users'
        });
    };

    return company
}