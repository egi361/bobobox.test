import { Injectable } from '@nestjs/common';
import { Room } from '../../../../persistence/models/room.model';
import { RoomType } from '../../../../persistence/models/roomType.model';
import { Stay } from '../../../../persistence/models/stay.model';
import { Price } from '../../../../persistence/models/price.model';
import { Reservation } from '../../../../persistence/models/reservation.model';
import BaseRepository, {RepoResult} from '../../../commons/base.repository';
import {IGetRoomAvailabilityRequest} from '../queries/impl';
import {Op} from 'sequelize';
import { Result, RepoError, PagedResult } from '../../../../app.base';
import RoomAvailabilityDto,{AvailableRoomDto, RoomPriceDto} from '../dtos/roomAvailability.dto';

@Injectable()
export class RoomRepository extends BaseRepository<Room, number> {
    constructor() {
        super(Room);
    }
    public async getRoomAvailability(request: IGetRoomAvailabilityRequest): RepoResult<RoomAvailabilityDto> {
        try {
            const reservations = await Reservation.findAll({
                include:[
                    {
                        model:Stay,
                        include:[
                            {
                                model:Room
                            }
                        ]
                    }
                ],
                where:{
                    [Op.or]:{
                        checkin_date: {
                            [Op.lte]: request.checkin_date
                        },
                        checkout_date: {
                            [Op.gte]: request.checkin_date
                        }
                    },
                    [Op.or]: {
                        checkin_date: {
                            [Op.lt]: request.checkout_date
                        },
                        checkout_date: {
                            [Op.gte]: request.checkout_date
                        }
                    },
                    [Op.or]: {
                        checkin_date: {
                            [Op.gte]: request.checkin_date,
                            [Op.lte]: request.checkout_date
                        }
                    }
                }
            });
            const bookedRooms = reservations.map((reservation)=>{
                return reservation.stays[0].room.id
            });
            const rooms = await this.Model.findAll({
                include: [{
                    model: RoomType,
                    include: [
                        {
                            model:Price
                        }
                    ]
                }],
                where:{
                    id:{
                        [Op.notIn]:bookedRooms
                    },
                    room_type_id:request.room_type_id
                }
            });
            if (!rooms) {
                return Result.fail(new RepoError('Not found', 404));
            }
            const availableRooms = rooms.map((room)=>{
                return new AvailableRoomDto(
                    room.id,
                    room.room_number,
                    room.roomType.prices.map((price)=>{
                        return new RoomPriceDto(
                            request.checkin_date,
                            price.price
                        );
                    })
                );
            });
            const roomAvailability = new RoomAvailabilityDto(
                request.room_qty,
                request.room_type_id,
                request.checkin_date,
                request.checkout_date,
                0,
                availableRooms
            );
            return PagedResult.ok(roomAvailability);
        } catch (ex: any) {
            console.log(ex)
            return Result.fail(new RepoError(ex.message, 500));
        }
    }
}
