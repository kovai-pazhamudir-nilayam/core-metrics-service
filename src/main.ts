import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import fastifyMetrics from 'fastify-metrics';
import { AppModule } from './app.module';
import fastifyCors from '@fastify/cors';
import {
  AllExceptionsFilter,
  LoggingInterceptor,
  METRICS_CONFIGS,
} from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false, disableRequestLogging: true }),
  );

  await app.register(fastifyCors, {
    origin: /\.kpn\.com$/,
    credentials: true,
  });
  await app.register(fastifyMetrics, METRICS_CONFIGS);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.setGlobalPrefix('api/v1');
  app.useLogger(app.get(Logger));

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
