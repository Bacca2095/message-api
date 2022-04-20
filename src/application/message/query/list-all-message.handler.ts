import { Injectable } from '@nestjs/common';
import { DaoMessage } from 'src/domain/message/port/dao/message.dao';
import { MessageDto } from '../dto/message.dto';

@Injectable()
export class HandlerListAllMessage {
  constructor(private daoMessage: DaoMessage) {}
  async execute(): Promise<MessageDto[]> {
    return this.daoMessage.listAll();
  }
}
