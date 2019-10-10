import { Controller, Get } from '@nestjs/common';

import { Message } from '@sws/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  getData(): Message {
    const ping = new Date().getTime()
    return this.appService.getData(ping);
  }
}
