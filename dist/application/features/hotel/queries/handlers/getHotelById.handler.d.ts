import { IQueryHandler } from '@nestjs/cqrs';
import { HotelRepository } from '../../repository/hotel.repository';
import { GetHotelByIdQuery } from '../impl';
export declare class GetHotelByIdHandler implements IQueryHandler<GetHotelByIdQuery> {
    private readonly repository;
    constructor(repository: HotelRepository);
    execute(query: GetHotelByIdQuery): Promise<import("../../../../../app.base").Result<undefined, import("../../../../../app.base").RepoError> | import("../../../../../app.base").Result<import("../../../../../persistence/models/hotel.model").Hotel, undefined>>;
}
