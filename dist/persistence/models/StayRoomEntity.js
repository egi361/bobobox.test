'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("../shared/BaseModel");
module.exports = (sequelize, DataTypes) => {
    class StayRoomEntity extends BaseModel_1.BaseEntityModel {
        static associate(models) {
            StayRoomEntity.belongsTo(models.Room, {
                foreignKey: 'room_id'
            });
            StayRoomEntity.belongsTo(models.Stay, {
                foreignKey: 'stay_id',
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION'
            });
        }
    }
    ;
    StayRoomEntity.init({
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
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stay_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Stays',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'StayRoom',
    });
    return StayRoomEntity;
};
//# sourceMappingURL=StayRoomEntity.js.map