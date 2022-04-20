import { ApiProperty } from '@nestjs/swagger';

export class MessageDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Cesar' })
  text: string;

  @ApiProperty({ example: '123456789' })
  addresses: string;

  @ApiProperty({ example: new Date().toISOString() })
  createdAt: Date;
}
