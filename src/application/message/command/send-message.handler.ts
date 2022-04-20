import { Injectable } from '@nestjs/common';
import { Message } from 'src/domain/message/model/message';
import { ServiceSendMessage } from 'src/domain/message/service/send-message.service';
import { CommandSendMessage } from './send-message.command';

@Injectable()
export class HandlerSendMessage {
  constructor(private serviceSendMessage: ServiceSendMessage) {}

  async execute(command: CommandSendMessage) {
    const { text, to, type } = command;
    await this.serviceSendMessage.execute(new Message({ text, to, type }));
  }
}
