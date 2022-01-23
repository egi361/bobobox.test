'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("../shared/BaseModel");
module.exports = (sequelize, DataTypes) => {
    class ReservationEntity extends BaseModel_1.BaseEntityModel {
        static associate(models) {
            ReservationEntity.belongsTo(models.Hotel, {
                foreignKey: 'hotel_id'
            });
            ReservationEntity.hasMany(models.Stay, {
                foreignKey: 'reservation_id',
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION'
            });
        }
    }
    ;
    ReservationEntity.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        booked_room_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        checkin_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        checkout_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hotel_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Hotels',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Reservation',
    });
    return ReservationEntity;
};
//# sourceMappingURL=ReservationEntity.js.map