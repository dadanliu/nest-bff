import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import UserController from './controller';
import UserService from './service';
import UserSchema, { User } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: 'user',
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
