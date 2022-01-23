import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HotelController } from './hotel.controller';
import { QueryHandlers } from './queries/handlers';
import { HotelRepository } from './repository/hotel.repository';

@Module({
  imports: [CqrsModule],
  controllers: [HotelController],
  providers: [
    HotelRepository,
    ...QueryHandlers
  ],
})
export class HotelModule {}
