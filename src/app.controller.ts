import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string[] {
    const a = ["a","b",'c'];
    const b = ["a", "c", 'f'];
    // return this.appService.getHello();
    return [
      ...a,
      ...b
    ];
  }
}
