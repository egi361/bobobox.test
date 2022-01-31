import { CommandBus, QueryBus } from '@nestjs/cqrs';
import RoomAvailabilityDto from './dtos/roomAvailability.dto';
import { IGetRoomAvailabilityRequest } from './queries/impl';
export declare class RoomController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(params: IGetRoomAvailabilityRequest): Promise<RoomAvailabilityDto>;
}
