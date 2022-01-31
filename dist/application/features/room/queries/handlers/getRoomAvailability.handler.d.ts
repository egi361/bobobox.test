import { IQueryHandler } from '@nestjs/cqrs';
import { RoomRepository } from '../../repository/room.repository';
import { GetRoomAvailabilityQuery } from '../impl';
export declare class GetRoomAvailabilityHandler implements IQueryHandler<GetRoomAvailabilityQuery> {
    private readonly repository;
    constructor(repository: RoomRepository);
    execute(query: GetRoomAvailabilityQuery): Promise<import("../../../../../app.base").Result<import("../../dtos/roomAvailability.dto").default, import("../../../../../app.base").RepoError> | import("../../../../../app.base").PagedResult<import("../../dtos/roomAvailability.dto").default, import("../../../../../app.base").RepoError>>;
}
