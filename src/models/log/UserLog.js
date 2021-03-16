module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('UserLog', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_affected_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        user_actor_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        user_ip: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        action_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        before: {
          type: DataTypes.STRING(100)
        },
        after: {
          type: DataTypes.STRING(100)
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'tbUserLogs'
    })

    return user
}