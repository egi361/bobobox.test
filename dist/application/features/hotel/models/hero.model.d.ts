import { AggregateRoot } from '@nestjs/cqrs';
export declare class Hero extends AggregateRoot {
    private readonly id;
    constructor(id: string);
    killEnemy(enemyId: string): void;
    addItem(itemId: string): void;
}
