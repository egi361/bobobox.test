export interface IBaseRequest{
    order:string;
    filter:string;
    limit:number;
    offset:number;
}
export default class BaseRequest implements IBaseRequest {
    order: string;
    filter: string;
    limit: number;
    offset: number;
    public constructor(request:IBaseRequest){
        this.order = request.order;
        this.filter = request.filter;
        this.limit = request.limit;
        this.offset = request.offset;
    }
}