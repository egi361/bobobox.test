import sequelize from 'sequelize';
import { Result, RepoError, PagedResult } from '../../app.base';
import { IBaseRequest } from '../commons/base.request';
export declare type RepoResult<M> = Promise<Result<M | undefined, RepoError | undefined> | PagedResult<M | undefined, RepoError | undefined>>;
export interface IRepository<TEntity, TKey> {
    save(model: TEntity): RepoResult<TEntity>;
    findById(id: TKey): RepoResult<TEntity>;
    findAll(): RepoResult<TEntity[]>;
}
export default abstract class BaseRepository<TEntity extends sequelize.Model, TKey> implements IRepository<TEntity, TKey> {
    protected Model: sequelize.ModelStatic<TEntity>;
    protected operators: {
        $eq: symbol;
        $ne: symbol;
        $gte: symbol;
        $gt: symbol;
        $lte: symbol;
        $lt: symbol;
        $not: symbol;
        $in: symbol;
        $notIn: symbol;
        $is: symbol;
        $like: symbol;
        $notLike: symbol;
        $iLike: symbol;
        $notILike: symbol;
        $regexp: symbol;
        $notRegexp: symbol;
        $iRegexp: symbol;
        $notIRegexp: symbol;
        $between: symbol;
        $notBetween: symbol;
        $overlap: symbol;
        $contains: symbol;
        $contained: symbol;
        $adjacent: symbol;
        $strictLeft: symbol;
        $strictRight: symbol;
        $noExtendRight: symbol;
        $noExtendLeft: symbol;
        $and: symbol;
        $or: symbol;
        $any: symbol;
        $all: symbol;
        $values: symbol;
        $col: symbol;
    };
    constructor(Model: sequelize.ModelStatic<TEntity>);
    filter(request: IBaseRequest): RepoResult<TEntity[]>;
    findAll(): RepoResult<TEntity[]>;
    save(doc: TEntity): Promise<Result<TEntity, undefined> | Result<undefined, RepoError>>;
    findById(id: TKey): Promise<Result<TEntity, undefined> | Result<undefined, RepoError>>;
}
