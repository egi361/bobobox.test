'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("../shared/BaseModel");
module.exports = (sequelize, DataTypes) => {
    class StayEntity extends BaseModel_1.BaseEntityModel {
        static associate(models) {
            StayEntity.belongsTo(models.Reservation, {
                foreignKey: 'reservation_id',
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION'
            });
            StayEntity.belongsTo(models.Room, {
                foreignKey: 'room_id'
            });
            StayEntity.hasMany(models.StayRoom, {
                foreignKey: 'stay_id',
                as: 'stayRooms',
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION'
            });
        }
    }
    ;
    StayEntity.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        room_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Rooms',
                key: 'id'
            }
        },
        guest_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reservation_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Reservations',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Stay',
    });
    return StayEntity;
};
//# sourceMappingURL=StayEntity.js.map