import sequelize from 'sequelize';
import {Result, RepoError} from '../../app.base';
export type RepoResult<M> = Promise<Result<M | undefined, RepoError | undefined>>;
export interface IRepository<TEntity, TKey>{
    save(model: TEntity): RepoResult<TEntity>;
    findById(id: TKey): RepoResult<TEntity>;
    // search(parameterName: string, parameterValue: string, sortBy: string, order: number, pageSize: number, pageNumber: number): RepoResult<TEntity[]>;
    // getAll(): RepoResult<TEntity[]>;
    // deleteById(id: string): RepoResult<TEntity>;
    // findByIds(ids: string[]): RepoResult<TEntity[]>;
    // deleteByIds(ids: string[]): RepoResult<any>;
}
export default class Repository<TEntity extends sequelize.Model, TKey> implements IRepository<TEntity,TKey>
{
    protected Model!: sequelize.ModelStatic<TEntity>;
    constructor(Model: sequelize.ModelStatic<TEntity>) {
        this.Model = Model;
    }
    // search(parameterName: string, parameterValue: string, sortBy: string, order: number, pageSize: number, pageNumber: number): RepoResult<M[]> {
    //     throw new Error('Method not implemented.');
    // }
    // getAll(): RepoResult<M[]> {
    //     throw new Error('Method not implemented.');
    // }
    // deleteById(id: string): RepoResult<M> {
    //     throw new Error('Method not implemented.');
    // }
    // findByIds(ids: string[]): RepoResult<M[]> {
    //     throw new Error('Method not implemented.');
    // }
    // deleteByIds(ids: string[]): RepoResult<any> {
    //     throw new Error('Method not implemented.');
    // }

    public async save(doc: TEntity) {
        try {
            const savedDoc = await doc.save();
            return Result.ok(savedDoc);
        } catch (ex: any) {
            return Result.fail(new RepoError(ex.message, 500));
        }
    }

    public async findById(id: TKey) {
        try {
            const doc = await this.Model.findOne({
                where: {
                    id: id
                }
            });
            if (!doc) {
                return Result.fail(new RepoError('Not found', 404));
            }

            return Result.ok(doc);
        } catch (ex: any) {
            return Result.fail(new RepoError(ex.message, 500));
        }
    }
}