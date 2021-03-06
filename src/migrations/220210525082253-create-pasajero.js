'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pasajeros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naveId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Naves',
          key: 'id'
        },
        onUpdadate: 'CASCADE',
        onDelete:'CASCADE'
      },

      nombre: {
        type: Sequelize.STRING
      },
      apellido1: {
        type: Sequelize.STRING
      },
      apellido2: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      especialidad: {
        type: Sequelize.STRING
      },
      origen: {
        type: Sequelize.STRING
      },
      nacimiento: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pasajeros');
  }
};