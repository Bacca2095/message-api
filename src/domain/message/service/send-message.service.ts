import { Message } from '../model/message';
import { RepositoryMessage } from '../port/repository/message.repository';

export class ServiceSendMessage {
  constructor(private readonly repositoryMessage: RepositoryMessage) {}
  async execute(message: Message) {
    await this.repositoryMessage.sendMessage(message);
  }
}
