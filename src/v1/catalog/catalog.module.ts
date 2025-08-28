import {
  HttpProvider,
  HttpService,
} from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CatalogController } from './catalog.contoller';
import { CatalogRepository } from './catalog.repository';
import { CatalogService } from './catalog.service';
import { CatalogTransformer } from './catalog.transformer';
import { restErrors } from '../errors/rest';

@Module({
  controllers: [CatalogController],
  providers: [
    CatalogService,
    CatalogRepository,
    CatalogTransformer,
    HttpService,
    HttpProvider.RestErrors(restErrors),
    ConfigService,
  ],
})
export class CatalogModule {}
