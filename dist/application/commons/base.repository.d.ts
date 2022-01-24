import sequelize from 'sequelize';
import { Result, RepoError } from '../../app.base';
export declare type RepoResult<M> = Promise<Result<M | undefined, RepoError | undefined>>;
export interface IRepository<TEntity, TKey> {
    save(model: TEntity): RepoResult<TEntity>;
    findById(id: TKey): RepoResult<TEntity>;
    findAll(): RepoResult<TEntity[]>;
}
export default abstract class BaseRepository<TEntity extends sequelize.Model, TKey> implements IRepository<TEntity, TKey> {
    protected Model: sequelize.ModelStatic<TEntity>;
    constructor(Model: sequelize.ModelStatic<TEntity>);
    findAll(): RepoResult<TEntity[]>;
    save(doc: TEntity): Promise<Result<TEntity, undefined> | Result<undefined, RepoError>>;
    findById(id: TKey): Promise<Result<TEntity, undefined> | Result<undefined, RepoError>>;
}
