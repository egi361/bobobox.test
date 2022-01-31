export type RepoErrorCode = 404 | 500;

export class RepoError extends Error {
    public code: RepoErrorCode;
    constructor(message: string, code: RepoErrorCode) {
        super(message);
        this.code = code;
    }
}
export interface BaseResponse {
    statusCode: Number,
    errorMessage: String,
    data: any
}



export class Result<V, E> {
    public isSuccess: boolean;
    public isFailure: boolean;
    public error: E;
    public value: V;

    public constructor(isSuccess: boolean, value: V, error: E) {
        if (isSuccess && error) {
            throw new Error('Successful result must not contain an error');
        } else if (!isSuccess && value) {
            throw new Error('Unsuccessful error must not contain a value');
        }

        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.value = value;
        this.error = error;
    }

    public static ok<V>(value: V): Result<V, undefined> {
        return new Result(true, value, undefined);
    }

    public static fail<E>(error: E): Result<undefined, E> {
        return new Result(false, undefined, error);
    }

    public getError(): E {
        if (this.isSuccess) {
            throw new Error('Successful result does not contain an error');
        }

        return this.error;
    }

    public getValue(): V {
        if (this.isFailure) {
            throw new Error('Unsuccessful result does not contain a value');
        }

        return this.value;
    }
}

export class PagedResult<V,E> extends Result<V,E>{
    public count!:number;
    public constructor(isSuccess: boolean, value: V, error: E, count:number) {
        super(isSuccess, value, error);
        this.count = count;
    }
    public static okPaged<V>(value: V, count: number): PagedResult<V, undefined> {
        return new PagedResult(true, value, undefined, count);
    }
}