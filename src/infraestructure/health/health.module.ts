import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './controller/health.controller';

@Module({
  imports: [HttpModule, TerminusModule],
  controllers: [HealthController],
})
export class HealthModule {}
