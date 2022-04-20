import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NodeEnv } from './config/environment/env-node.enum';
import * as Joi from 'joi';
import { AppLogger } from './config/app-logger.service';
import { HealthModule } from './health/health.module';

@Module({
  providers: [AppLogger],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
          .required(),
      }),
    }),
    HealthModule,
  ],
})
export class InfraestructureModule {}
