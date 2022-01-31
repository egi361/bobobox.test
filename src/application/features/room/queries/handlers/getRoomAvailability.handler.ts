import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { RoomRepository } from '../../repository/room.repository';
import { GetRoomAvailabilityQuery } from '../impl';

@QueryHandler(GetRoomAvailabilityQuery)
export class GetRoomAvailabilityHandler implements IQueryHandler<GetRoomAvailabilityQuery> {
    constructor(private readonly repository: RoomRepository) { }

    async execute(query: GetRoomAvailabilityQuery) {
        return await this.repository.getRoomAvailability(query);
    }
}
