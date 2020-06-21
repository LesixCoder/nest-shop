import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AdminauthMiddleware } from './middleware/adminauth.middleware';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';

@Module({
  imports: [AdminModule, ApiModule, DefaultModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminauthMiddleware).forRoutes('admin/*');
  }
}
