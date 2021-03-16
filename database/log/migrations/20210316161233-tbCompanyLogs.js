'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbCompanyLogs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_affected_id: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_actor_id: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_ip: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      action_id: {
        type: Sequelize.INTEGER
      },
      before: {
        type: Sequelize.STRING(100)
      },
      after: {
        type: Sequelize.STRING(100)
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbCompanyLogs')
  }
};
