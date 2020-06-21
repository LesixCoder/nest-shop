import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminauthMiddleware } from './middleware/adminauth.middleware';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';
import { AdminService } from './service/admin/admin.service';

@Module({
  imports: [
    AdminModule,
    ApiModule,
    DefaultModule,
    MongooseModule.forRoot('mongodb://localhost/nestshop', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [],
  providers: [AdminService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminauthMiddleware).forRoutes('admin/*');
  }
}
