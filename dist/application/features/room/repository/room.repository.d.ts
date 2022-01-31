import { Room } from '../../../../persistence/models/room.model';
import BaseRepository, { RepoResult } from '../../../commons/base.repository';
import { IGetRoomAvailabilityRequest } from '../queries/impl';
import RoomAvailabilityDto from '../dtos/roomAvailability.dto';
export declare class RoomRepository extends BaseRepository<Room, number> {
    constructor();
    getRoomAvailability(request: IGetRoomAvailabilityRequest): RepoResult<RoomAvailabilityDto>;
}
