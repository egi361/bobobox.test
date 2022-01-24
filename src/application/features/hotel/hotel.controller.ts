import { Controller, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hotel } from '../../../persistence/models/hotel.model';
import { GetHotelsQuery, GetHotelByIdQuery } from './queries/impl';

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
  @Get(':id')
  async find(@Param('id') id:number): Promise<Hotel[]> {
    return this.queryBus.execute(new GetHotelByIdQuery(id));
  }
}
