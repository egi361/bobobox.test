import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HotelRepository } from '../../repository/hotel.repository';
import { KillDragonCommand } from '../impl/kill-dragon.command';
export declare class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
    private readonly repository;
    private readonly publisher;
    constructor(repository: HotelRepository, publisher: EventPublisher);
    execute(command: KillDragonCommand): Promise<void>;
}
