export interface IAuditableEntity {
    modified_date?: Date;
    modified_by?: String;
    created_date: Date;
    created_by: String;
}
export interface IEntity<TKey> {
    id: TKey;
}
export declare abstract class Entity<TKey> implements IEntity<TKey> {
    id: TKey;
}
export declare abstract class AuditableEntity<TKey> extends Entity<TKey> implements IAuditableEntity {
    modified_date?: Date | undefined;
    modified_by?: String | undefined;
    created_date: Date;
    created_by: String;
}
