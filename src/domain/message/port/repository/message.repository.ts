import { Message } from '../../model/message';

export abstract class RepositoryMessage {
  abstract sendMessage(message: Message): Promise<boolean>;
}
