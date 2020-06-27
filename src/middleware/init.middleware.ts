import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Config } from '../config/config';
import { Helper } from '../extend/helper';

@Injectable()
export class InitMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.locals.config = Config;
    res.locals.helper = Helper;
    next();
  }
}
