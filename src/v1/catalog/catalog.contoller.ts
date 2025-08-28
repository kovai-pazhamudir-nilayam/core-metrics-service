import {
  AuthGuard,
  LogTrace,
  LogTraceType,
  QueryGuard,
  UserInfo,
  UserInfoType,
} from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';
import { Controller, Get, UseGuards, SetMetadata } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Banner } from './entity/bff-response';

import { DomainAndSourceSystem } from '../../common/constants/downstreamCalls.constant';

const METADATA = {
  validate_token: false,
  source_system: DomainAndSourceSystem.source_system,
  domain: DomainAndSourceSystem.domain,
};

@UseGuards(QueryGuard)
@UseGuards(AuthGuard)
@Controller()
export class CatalogController {
  constructor(private readonly service: CatalogService) {}

  // GET Banners list
  @Get('banners')
  @SetMetadata('metadata', METADATA)
  async fetchBanners(
    @LogTrace() logTrace?: LogTraceType,
    @UserInfo() userInfo?: UserInfoType,
  ): Promise<Banner[]> {
    console.log(userInfo);
    return this.service.fetchBanners({
      logTrace,
    });
  }
}
