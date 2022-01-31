import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HotelRepository } from '../../repository/hotel.repository';
import { GetHotelByIdQuery } from '../impl';

@QueryHandler(GetHotelByIdQuery)
export class GetHotelByIdHandler implements IQueryHandler<GetHotelByIdQuery> {
  constructor(private readonly repository: HotelRepository) {}

  async execute(query: GetHotelByIdQuery) {
    return await this.repository.findById(query.id);
  }
}
