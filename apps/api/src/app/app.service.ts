import { Injectable } from '@nestjs/common';
import { Message } from '@sws/api-interfaces';

@Injectable()
export class AppService {
  getData(ping: number): Message {
    const pong = new Date().getTime();
    return { message: `Pong: ${pong - ping}ms` };
  }
}
