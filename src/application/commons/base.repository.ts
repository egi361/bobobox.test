import sequelize from 'sequelize';
import {Result, RepoError} from '../../app.base';
export type RepoResult<M> = Promise<Result<M | undefined, RepoError | undefined>>;
export interface IRepository<TEntity, TKey>{
    save(model: TEntity): RepoResult<TEntity>;
    findById(id: TKey): RepoResult<TEntity>;
    findAll(): RepoResult<TEntity[]>;
}
export default abstract class BaseRepository<TEntity extends sequelize.Model, TKey> implements IRepository<TEntity,TKey>
{
    protected Model!: sequelize.ModelStatic<TEntity>;
    constructor(Model: sequelize.ModelStatic<TEntity>) {
        this.Model = Model;
    }
    public async findAll(): RepoResult<TEntity[]> {
        try {
            const docs = await this.Model.findAll();
            if (!docs) {
                return Result.fail(new RepoError('Not found', 404));
            }

            return Result.ok(docs);
        } catch (ex: any) {
            return Result.fail(new RepoError(ex.message, 500));
        }
    }

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