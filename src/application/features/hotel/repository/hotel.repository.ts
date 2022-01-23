import { Injectable } from '@nestjs/common';
import {Hotel} from '../../../../persistence/models/hotel.model';

@Injectable()
export class HotelRepository {

  async findAll(): Promise<Hotel[]> {
    return Hotel.findAll();
  }
}
