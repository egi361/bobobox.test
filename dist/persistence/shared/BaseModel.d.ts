import { Model } from 'sequelize';
import { IEntity, IAuditableEntity } from 'bobobox.base.entity';
export declare class BaseEntityModel<TAttributes, TKey> extends Model<TAttributes> implements IEntity<TKey> {
    id: TKey;
}
export declare class BaseAuditableEntityModel<TAttributes, TKey> extends Model<TAttributes> implements IEntity<TKey>, IAuditableEntity {
    modified_date?: Date | undefined;
    modified_by?: String | undefined;
    created_date: Date;
    created_by: String;
    id: TKey;
}
