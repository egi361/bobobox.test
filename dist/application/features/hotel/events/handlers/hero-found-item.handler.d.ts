import { IEventHandler } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';
export declare class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
    handle(event: HeroFoundItemEvent): void;
}
