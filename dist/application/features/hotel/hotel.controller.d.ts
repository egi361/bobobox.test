import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hotel } from '../../../persistence/models/hotel.model';
export declare class HotelController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(): Promise<Hotel[]>;
}
