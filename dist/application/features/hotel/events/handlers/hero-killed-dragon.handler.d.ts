import { IEventHandler } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';
export declare class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
    handle(event: HeroKilledDragonEvent): void;
}
