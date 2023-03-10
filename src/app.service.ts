import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { [key: string]: string } {
    return { data: 'Hello World!' };
  }

  getHello2(): { [key: string]: string } {
    return { data: 'Hello World2!' };
  }
}
