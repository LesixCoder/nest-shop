import { Injectable } from '@nestjs/common';
import * as md5 from 'md5';
//引入验证码库
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class ToolsService {
  getCaptcha() {
    return svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
  }

  getMd5(str: string) {
    return md5(str);
  }

  async success(res, redirectUrl) {
    await res.render('admin/public/success', {
      redirectUrl: redirectUrl,
    });
  }
  async error(res, message, redirectUrl) {
    await res.render('admin/public/error', {
      message: message,
      redirectUrl: redirectUrl,
    });
  }
}
