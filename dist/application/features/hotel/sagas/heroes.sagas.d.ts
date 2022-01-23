import { ICommand } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
export declare class HeroesGameSagas {
    dragonKilled: (events$: Observable<any>) => Observable<ICommand>;
}
