import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export default class GetUserDetailDto implements PipeTransform {
  async transform(value: string) {
    console.log('transform', value);
    const targetUserId = parseInt(value);
    if (targetUserId === 0) {
      throw new BadRequestException('userId can not be zero');
    }

    return targetUserId;
  }
}
