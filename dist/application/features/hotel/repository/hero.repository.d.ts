import { Hero } from '../models/hero.model';
export declare class HeroRepository {
    findOneById(id: number): Promise<Hero>;
    findAll(): Promise<Hero[]>;
}
