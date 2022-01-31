export interface IBaseRequest {
    order: string;
    filter: string;
    limit: number;
    offset: number;
}
export default class BaseRequest implements IBaseRequest {
    order: string;
    filter: string;
    limit: number;
    offset: number;
    constructor(request: IBaseRequest);
}
