import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): { [key: string]: string } {
    return this.appService.getHello();
  }

  @Get('hello/foo')
  getHello2(): { [key: string]: string } {
    return this.appService.getHello2();
  }
}
