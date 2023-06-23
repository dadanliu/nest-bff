import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      // map mapper; tap 执行副作用
      tap((data) => {
        const ret = {
          data,
          msg: 'success',
          code: 200,
        };
        context.switchToHttp().getResponse().json(ret);
      }),
    );
  }
}
