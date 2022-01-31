'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const roomTypes = await queryInterface.sequelize.query(
      `SELECT * from [RoomTypes];`
    );
    const roomPrice = {
      Single: 600000,
      Double: 800000,
      Triple: 1000000,
      Quad: 1600000,
      Queen: 1200000,
      King: 1400000,
      Tween: 1300000
    };
    let prices = [];
      roomTypes[0].forEach(roomType => {
        prices.push(
          {
            date: new Date(),
            price: roomPrice[roomType.name]||0,
            room_type_id: roomType.id,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        );
      });
    await queryInterface.bulkInsert('Prices', prices, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Prices', null, {});
  }
};
