'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      paymentStatus: {
        type: Sequelize.ENUM,
        values:  [
          "CREATED",
          "PROCESSING",
          "SHIPPED",
          "DELIVERED",
          "COMPLETED",
          "CANCELLED",
          "RETURNED"
        ],
        defaultValue: "CREATED"
      },
      paymentStatus: {
        type: Sequelize.ENUM,
        values: [
          "PENDING",
          "FAILED",
          "INPROGRESS",
          "COMPLETED",
          "REFUND",
          "CANCELLED",
          "DISPUTED"
        ],
        defaultValue: 'INPROGRESS'
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      shippingAddress: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  }, async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order');
  }
};