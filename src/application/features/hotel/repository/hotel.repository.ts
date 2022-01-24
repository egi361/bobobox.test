import { Injectable } from '@nestjs/common';
import {Hotel} from '../../../../persistence/models/hotel.model';
import BaseRepository from '../../../commons/base.repository';

@Injectable()
export class HotelRepository extends BaseRepository<Hotel, number> {
  constructor(){
    super(Hotel);
  }
}
