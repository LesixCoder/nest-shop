import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { ToolsService } from '../../../service/tools/tools.service';

@Controller('admin/login')
export class LoginController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  @Render('admin/login')
  index() {
    return {};
  }

  @Get('code')
  getCode(@Req() req: any, @Res() res: Response) {
    const svgCaptcha = this.toolsService.getCaptcha();

    //设置session
    req.session.code = svgCaptcha.text;
    res.type('image/svg+xml');
    res.send(svgCaptcha.data);
  }
}
