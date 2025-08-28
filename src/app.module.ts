import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { LoggerModule } from 'nestjs-pino';
import {
  HealthModule,
  getLogsConfiguration,
} from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';
import { envVariablesConfig } from './common/configs/envVars.config';
import { CatalogModule } from './v1/catalog/catalog.module';

@Module({
  imports: [
    TerminusModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validationSchema: envVariablesConfig,
    }),
    LoggerModule.forRoot({
      pinoHttp: getLogsConfiguration(),
    }),
    HealthModule,
    CatalogModule,
  ],
})
export class AppModule {}
