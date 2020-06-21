import { Module } from '@nestjs/common';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';

//配置数据库连接

@Module({
  imports: [AdminModule, ApiModule, DefaultModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
