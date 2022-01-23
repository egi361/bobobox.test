"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const hero_found_item_event_1 = require("../events/impl/hero-found-item.event");
const hero_killed_dragon_event_1 = require("../events/impl/hero-killed-dragon.event");
class Hero extends cqrs_1.AggregateRoot {
    constructor(id) {
        super();
        this.id = id;
    }
    killEnemy(enemyId) {
        this.apply(new hero_killed_dragon_event_1.HeroKilledDragonEvent(this.id, enemyId));
    }
    addItem(itemId) {
        this.apply(new hero_found_item_event_1.HeroFoundItemEvent(this.id, itemId));
    }
}
exports.Hero = Hero;
//# sourceMappingURL=hero.model.js.map