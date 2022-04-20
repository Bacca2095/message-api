import { ErrorBase } from '../../errors/error-base';
import { MessageType } from '../enum/message-type.enum';
import { IMessage } from './message.interface';

export class Message {
  #text: string;
  #to: string[];
  #type: string;

  constructor(message: IMessage) {
    this.validateData(message);
    this.#text = message.text;
    this.#to = message.to;
    this.#type = message.type;
  }

  private validateText(text: string) {
    if (text.length < 3) {
      throw new ErrorBase('The text of message is very short', Message.name);
    }
  }

  private validateTo(to: string[]) {
    if (to.length <= 0) {
      throw new ErrorBase('The addresses is empty', Message.name);
    }
  }

  private validateType(type: string) {
    if (!(type in MessageType)) {
      throw new ErrorBase('The message type is wrong', Message.name);
    }
  }

  private validateData(message: IMessage) {
    this.validateText(message.text);
    this.validateTo(message.to);
    this.validateType(message.type);
  }

  get getText(): string {
    return this.#text;
  }

  get getTo(): string[] {
    return this.#to;
  }

  get getType(): string {
    return this.#type;
  }
}
