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
    private error;
    private value;
    private constructor();
    static ok<V>(value: V): Result<V, undefined>;
    static fail<E>(error: E): Result<undefined, E>;
    getError(): E;
    getValue(): V;
}
