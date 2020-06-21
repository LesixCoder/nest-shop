import { Module } from '@nestjs/common';
import { ToolsService } from '../../service/tools/tools.service';
import { LoginController } from './login/login.controller';
import { MainController } from './main/main.controller';
import { ManagerController } from './manager/manager.controller';

@Module({
  controllers: [MainController, LoginController, ManagerController],
  providers: [ToolsService]
})
export class AdminModule {}
