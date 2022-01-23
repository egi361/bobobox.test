import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { Hotel } from './persistence/models/hotel.model';
// import { RoomType } from './persistence/models/roomType.model';
// import { Price } from './persistence/models/price.model';
// import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
// import * as config from './persistence/config/config.json';
import { HotelModule } from './application/features/hotel/hotel.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [
    PersistenceModule,
    HotelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
