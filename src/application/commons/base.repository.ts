import sequelize, {Op} from 'sequelize';
import {Result, RepoError, PagedResult} from '../../app.base';
import BaseRequest, {IBaseRequest} from '../commons/base.request';
const sqs = require( 'sequelize-querystring');
export type RepoResult<M> = Promise<Result<M | undefined, RepoError | undefined> | PagedResult<M | undefined, RepoError | undefined>>;
export interface IRepository<TEntity, TKey>{
    save(model: TEntity): RepoResult<TEntity>;
    findById(id: TKey): RepoResult<TEntity>;
    findAll(): RepoResult<TEntity[]>;
}
export default abstract class BaseRepository<TEntity extends sequelize.Model, TKey> implements IRepository<TEntity,TKey>
{
    protected Model!: sequelize.ModelStatic<TEntity>;
    protected operators = {
        $eq: Op.eq,
        $ne: Op.ne,
        $gte: Op.gte,
        $gt: Op.gt,
        $lte: Op.lte,
        $lt: Op.lt,
        $not: Op.not,
        $in: Op.in,
        $notIn: Op.notIn,
        $is: Op.is,
        $like: Op.like,
        $notLike: Op.notLike,
        $iLike: Op.iLike,
        $notILike: Op.notILike,
        $regexp: Op.regexp,
        $notRegexp: Op.notRegexp,
        $iRegexp: Op.iRegexp,
        $notIRegexp: Op.notIRegexp,
        $between: Op.between,
        $notBetween: Op.notBetween,
        $overlap: Op.overlap,
        $contains: Op.contains,
        $contained: Op.contained,
        $adjacent: Op.adjacent,
        $strictLeft: Op.strictLeft,
        $strictRight: Op.strictRight,
        $noExtendRight: Op.noExtendRight,
        $noExtendLeft: Op.noExtendLeft,
        $and: Op.and,
        $or: Op.or,
        $any: Op.any,
        $all: Op.all,
        $values: Op.values,
        $col: Op.col
    };
    constructor(Model: sequelize.ModelStatic<TEntity>) {
        this.Model = Model;
    }
    public async filter(request: IBaseRequest):RepoResult<TEntity[]>{
        try {
            const doc = await this.Model.findAndCountAll({
                offset: request.offset || 0,
                limit: request.limit || 10,
                where: request.filter ? sqs.find(request.filter) : {},
                order: request.order ? sqs.sort(request.order) : []
            });
            if (!doc) {
                return Result.fail(new RepoError('Not found', 404));
            }

            return PagedResult.okPaged(doc.rows, doc.count);
        } catch (ex: any) {
            return Result.fail(new RepoError(ex.message, 500));
        }
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