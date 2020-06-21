import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';

@Injectable()
export class AdminauthMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    const pathname = req.baseUrl; //获取访问的地址
    const userinfo = req.session.userinfo;
    if (userinfo && userinfo.username) {
      next();
    } else {
      //排除不需要做权限判断的页面
      if (
        pathname == '/admin/login' ||
        pathname == '/admin/login/code' ||
        pathname == '/admin/login/doLogin'
      ) {
        next();
      } else {
        res.redirect('/admin/login');
      }
    }
  }
}

// export function AdminauthMiddleware(
//   req: any,
//   res: Response,
//   next: NextFunction,
// ) {
//   const pathname = req.baseUrl; //获取访问的地址
//   const userinfo = req.session.userinfo;
//   if (userinfo && userinfo.username) {
//     next();
//   } else {
//     //排除不需要做权限判断的页面
//     if (
//       pathname == '/admin/login' ||
//       pathname == '/admin/login/code' ||
//       pathname == '/admin/login/doLogin'
//     ) {
//       next();
//     } else {
//       res.redirect('/admin/login');
//     }
//   }
// }
