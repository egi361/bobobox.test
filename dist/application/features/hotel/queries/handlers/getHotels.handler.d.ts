import { IQueryHandler } from '@nestjs/cqrs';
import { HotelRepository } from '../../repository/hotel.repository';
import { GetHotelsQuery } from '../impl';
export declare class GetHotelsHandler implements IQueryHandler<GetHotelsQuery> {
    private readonly repository;
    constructor(repository: HotelRepository);
    execute(query: GetHotelsQuery): Promise<import("../../../../../persistence/models/hotel.model").Hotel[]>;
}
