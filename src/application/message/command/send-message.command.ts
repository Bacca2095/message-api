import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { MessageType } from 'src/domain/message/enum/message-type.enum';

export class CommandSendMessage {
  @IsString()
  @ApiProperty({ example: 'Hello world' })
  text: string;

  @IsString()
  @ApiProperty({ example: 'SMS' })
  type: MessageType;

  @IsString({ each: true })
  @ApiProperty({ example: ['1', '2'] })
  to: string[];
}
