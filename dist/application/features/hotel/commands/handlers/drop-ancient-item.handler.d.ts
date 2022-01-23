import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HotelRepository } from '../../repository/hotel.repository';
import { DropAncientItemCommand } from '../impl/drop-ancient-item.command';
export declare class DropAncientItemHandler implements ICommandHandler<DropAncientItemCommand> {
    private readonly repository;
    private readonly publisher;
    constructor(repository: HotelRepository, publisher: EventPublisher);
    execute(command: DropAncientItemCommand): Promise<void>;
}
