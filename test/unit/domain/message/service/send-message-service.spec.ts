import { createSandbox, SinonStubbedInstance } from 'sinon';
import { RepositoryMessage } from 'src/domain/message/port/repository/message.repository';
import { ServiceSendMessage } from 'src/domain/message/service/send-message.service';
import { createStubObj } from 'test/utils/create-object.stub';
import { MessageTestDataBuilder } from 'test/utils/message-test-data-builder';

const sinonSandbox = createSandbox();
describe('Service send message', () => {
  let repositoryMessage: SinonStubbedInstance<RepositoryMessage>;
  let serviceSendMessage: ServiceSendMessage;

  beforeAll(async () => {
    repositoryMessage = createStubObj<RepositoryMessage>(
      ['sendMessage'],
      sinonSandbox,
    );

    serviceSendMessage = new ServiceSendMessage(repositoryMessage);
  });

  afterEach(() => {
    sinonSandbox.restore();
  });

  it('check if fail send message', async () => {
    const message = new MessageTestDataBuilder().build();

    repositoryMessage.sendMessage.returns(Promise.resolve(false));

    await expect(serviceSendMessage.execute(message)).resolves;
  });

  it('send message', async () => {
    const message = new MessageTestDataBuilder().build();

    repositoryMessage.sendMessage.returns(Promise.resolve(true));

    await expect(serviceSendMessage.execute(message)).resolves;
  });
});
