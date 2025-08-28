import {
  HttpService,
  LogTraceType,
} from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DownstreamCallsConst } from '../../common/constants/downstreamCalls.constant';

@Injectable()
export class CatalogRepository {
  constructor(
    private readonly configService: ConfigService,
    private readonly service: HttpService,
  ) {}

  // private otp_service_url: string = this.configService.get('OTP_SERVICE_URI');

  private core_kpn_uri: string = this.configService.get('CORE_KPN_URI');

  async fetchBanners({ logTrace }: { logTrace: LogTraceType }): Promise<any> {
    const result = await this.service.rest({
      url: `${this.core_kpn_uri}/getbannerlist.php`,
      method: 'GET',
      headers: {
        ...logTrace,
      },
      ...DownstreamCallsConst.fetchBanners,
    });
    return result;
  }
}
