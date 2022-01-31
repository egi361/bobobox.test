import { Controller, Get, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Room } from '../../../persistence/models/room.model';
import RoomAvailabilityDto, {} from './dtos/roomAvailability.dto';
import { GetRoomAvailabilityQuery, IGetRoomAvailabilityRequest } from './queries/impl';
interface xxx{
  id:string,
  price:number
}
@Controller('room')
export class RoomController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() params: IGetRoomAvailabilityRequest): Promise<RoomAvailabilityDto> {
    return this.queryBus.execute(new GetRoomAvailabilityQuery(params));
  }
}
