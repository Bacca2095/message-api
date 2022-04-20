import { MessageDto } from 'src/application/message/dto/message.dto';

export abstract class DaoMessage {
  abstract listAll(): Promise<MessageDto[]>;
}
