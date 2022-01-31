'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('RoomTypes', [
            {
                name: 'Single',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Double',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Triple',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Quad',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Queen',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'King',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tween',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('RoomTypes', null, {});
    }
};
//# sourceMappingURL=20220128061744-add-room-types.js.map