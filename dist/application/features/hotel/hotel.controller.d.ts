import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hotel } from '../../../persistence/models/hotel.model';
import { IBaseRequest } from '../../commons/base.request';
export declare class HotelController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(params: IBaseRequest): Promise<Hotel[]>;
    find(id: number): Promise<Hotel[]>;
}
