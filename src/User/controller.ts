import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Param,
  HttpCode,
  HttpException,
  HttpStatus,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';

import UserService from './service';
import AddUserDto from './add.dto';
import DeleteUserDto from './delete.dto';
import GetUserDetailDto from './GetUserDetail.dto';
import { ResponseInterceptor } from 'src/utils/responseInterceptor';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/user')
@UseInterceptors(ResponseInterceptor)
@ApiTags('获取用户相关接口')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  @HttpCode(200)
  @ApiOperation({
    summary: '获取用户列表',
    // description: '获取所有的用户列表',
  })
  @ApiResponse({
    status: 200,
    description: '成功返回200',
    schema: {
      type: 'array',
      example: [
        {
          name: '张三',
          phone: '133213213',
        },
      ],
    },
  })
  async getUserList() {
    const list = await this.userService.getList();
    return list;
  }

  @Get('detail/:id')
  @HttpCode(200)
  getDetail(@Param('id', GetUserDetailDto) id: string, @Res() res: Response) {
    console.log('id', id);
    const targetUser = this.userService.getDetail(id);
    if (targetUser) {
      // res.status(200).json(targetUser);
      return targetUser;
    } else {
      throw new HttpException('User was not found', 404);
    }
  }

  @Post('add')
  addUser(@Body() userData: AddUserDto) {
    console.log('addUser', userData);
    return this.userService.add(userData);
  }

  @Delete('delete')
  deleteUser(@Query() query: DeleteUserDto) {
    console.log('query', query);
    return this.userService.delete(query.id);
  }
}
