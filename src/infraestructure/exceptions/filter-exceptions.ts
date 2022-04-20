import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorBase } from 'src/domain/errors/error-base';
import { AppLogger } from '../config/app-logger.service';
import { MessageException } from './dto/message-exception.dto';

@Catch(ErrorBase)
export class FilterExceptions implements ExceptionFilter {
  constructor(private readonly logger: AppLogger) {
    this.logger.setContext(FilterExceptions.name);
  }

  catch(error: ErrorBase, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode = HttpStatus.BAD_REQUEST;

    const message: MessageException = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: error.message,
    };

    this.logger.customError(error);
    response.status(statusCode).json(message);
  }
}
