import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RoomController } from './room.controller';
import { QueryHandlers } from './queries/handlers';
import { RoomRepository } from './repository/room.repository';

@Module({
  imports: [CqrsModule],
  controllers: [RoomController],
  providers: [
    RoomRepository,
    ...QueryHandlers
  ],
})
export class RoomModule {}
