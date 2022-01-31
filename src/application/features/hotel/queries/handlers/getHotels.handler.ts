import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HotelRepository } from '../../repository/hotel.repository';
import { GetHotelsQuery } from '../impl';

@QueryHandler(GetHotelsQuery)
export class GetHotelsHandler implements IQueryHandler<GetHotelsQuery> {
  constructor(private readonly repository: HotelRepository) {}

  async execute(query: GetHotelsQuery) {
    return await this.repository.filter(query);
  }
}
