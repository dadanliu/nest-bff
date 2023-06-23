import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserModule from './User/module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      // 链接自己服务器的数据库
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
