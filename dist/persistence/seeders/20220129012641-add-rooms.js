'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        const hotels = await queryInterface.sequelize.query(`SELECT * from [Hotels];`);
        const roomTypes = await queryInterface.sequelize.query(`SELECT * from [RoomTypes];`);
        let rooms = [];
        hotels[0].forEach(hotel => {
            let roomNumber = 1;
            roomTypes[0].forEach(roomType => {
                for (let i = 1; i <= 3; i++) {
                    rooms.push({
                        room_number: roomNumber,
                        room_status: 'available',
                        room_type_id: roomType.id,
                        hotel_id: hotel.id,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    });
                    roomNumber++;
                }
            });
        });
        await queryInterface.bulkInsert('Rooms', rooms, {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Rooms', null, {});
    }
};
//# sourceMappingURL=20220129012641-add-rooms.js.map