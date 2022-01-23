import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hotel } from '../../../persistence/models/hotel.model';
import { GetHotelsQuery } from './queries/impl';

@Controller('hotel')
export class HotelController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.queryBus.execute(new GetHotelsQuery());
  }
}
