export declare type RepoErrorCode = 404 | 500;
export declare class RepoError extends Error {
    code: RepoErrorCode;
    constructor(message: string, code: RepoErrorCode);
}
export interface BaseResponse {
    statusCode: Number;
    errorMessage: String;
    data: any;
}
export declare class Result<V, E> {
    isSuccess: boolean;
    isFailure: boolean;
    error: E;
    value: V;
    constructor(isSuccess: boolean, value: V, error: E);
    static ok<V>(value: V): Result<V, undefined>;
    static fail<E>(error: E): Result<undefined, E>;
    getError(): E;
    getValue(): V;
}
export declare class PagedResult<V, E> extends Result<V, E> {
    count: number;
    constructor(isSuccess: boolean, value: V, error: E, count: number);
    static okPaged<V>(value: V, count: number): PagedResult<V, undefined>;
}
