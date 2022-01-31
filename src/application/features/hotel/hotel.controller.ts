import { Controller, Get, Param, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hotel } from '../../../persistence/models/hotel.model';
import { GetHotelsQuery, GetHotelByIdQuery } from './queries/impl';
import {IBaseRequest} from '../../commons/base.request';

@Controller('hotel')
export class HotelController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) { }

    @Get()
    async findAll(@Query() params: IBaseRequest): Promise<Hotel[]> {
        return this.queryBus.execute(new GetHotelsQuery(params));
    }
    @Get(':id')
    async find(@Param('id') id: number): Promise<Hotel[]> {
        return this.queryBus.execute(new GetHotelByIdQuery(id));
    }
}