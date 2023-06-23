import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export default class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const status = exception.getStatus();
    console.log('exception status', status);

    const message = exception.message
      ? exception.message
      : `${status > 500 ? 'service error' : 'client error'}`;

    const errorResponse = {
      data: null,
      message,
      code: -1,
    };

    res.status(status).json(errorResponse);
  }
}
