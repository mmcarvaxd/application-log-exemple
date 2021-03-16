'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tbUsers',
      'company_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'tbCompanies',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'tbUsers',
      'company_id'
    );
  }
};
