import { MessageTestDataBuilder } from 'test/utils/message-test-data-builder';

describe('Message model', () => {
  it('this only create a model message', () => {
    const message = new MessageTestDataBuilder().build();

    const text = message.getText === 'Test message';
    const to = message.getTo[0] === '123' && message.getTo[1] === '456';
    const type = message.getType === 'SMS';

    expect(text && to && type).toEqual(true);
  });

  it('this create a model message with error in message length', () => {
    const message = () => new MessageTestDataBuilder().withText('te').build();
    expect(message).toThrow('The text of message is very short');
  });

  it('this create a model message with error in type', () => {
    const message = () => new MessageTestDataBuilder().withType('TEST').build();
    expect(message).toThrow('');
  });

  it('this create a model message with error without addresses', () => {
    const message = () => new MessageTestDataBuilder().withTo([]).build();
    expect(message).toThrow('The addresses is empty');
  });

  it('this create a model message with different text', () => {
    const message = new MessageTestDataBuilder()
      .withText('TESTING VALUE')
      .build();
    expect(message.getText).toEqual('TESTING VALUE');
  });

  it('this create a model message with different type', () => {
    const message = new MessageTestDataBuilder().withType('EMAIL').build();
    expect(message.getType).toEqual('EMAIL');
  });

  it('this create a model message with different addresses', () => {
    const message = new MessageTestDataBuilder().withTo(['123456']).build();
    expect(message.getTo[0]).toEqual('123456');
  });
});
