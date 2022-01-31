'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels', [
      {
        hotel_name: 'Aston',
        address: 'Pasteur, Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hotel_name: 'Vue Palace',
        address: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hotel_name: 'De Batara',
        address: 'Cihampelas, Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hotel_name: 'Pullman',
        address: 'Jl. Riau, Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hotel_name: 'Intercontinental',
        address: 'Cimenyan, Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hotel_name: 'Kupu kupu',
        address: 'Lembang, Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  }
};
