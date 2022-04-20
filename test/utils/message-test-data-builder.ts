import { Message } from 'src/domain/message/model/message';

export class MessageTestDataBuilder {
  #text: string;
  #to: string[];
  #type: string;

  constructor() {
    this.#text = 'Test message';
    this.#type = 'SMS';
    this.#to = ['123', '456'];
  }

  withType(type: string) {
    this.#type = type;
    return this;
  }

  withTo(to: string[]) {
    this.#to = to;
    return this;
  }

  withText(text: string) {
    this.#text = text;
    return this;
  }

  build() {
    return new Message({ text: this.#text, type: this.#type, to: this.#to });
  }
}
