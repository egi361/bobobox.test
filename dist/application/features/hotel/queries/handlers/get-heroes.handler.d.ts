import { IQueryHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';
export declare class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
    private readonly repository;
    constructor(repository: HeroRepository);
    execute(query: GetHeroesQuery): Promise<import("../../models/hero.model").Hero[]>;
}
