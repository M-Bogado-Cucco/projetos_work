import { Injectable } from '@nestjs/common';

import { X } from '@core';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Legal... ' + X;
  }
}
