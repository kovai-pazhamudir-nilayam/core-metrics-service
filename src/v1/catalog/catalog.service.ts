import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CatalogRepository } from './catalog.repository';
import { CatalogTransformer } from './catalog.transformer';
import { Banner } from './entity/bff-response';

@Injectable()
export class CatalogService {
  constructor(
    private readonly repository: CatalogRepository,
    private readonly transformer: CatalogTransformer,
    private readonly configService: ConfigService,
  ) {}

  async fetchBanners({ logTrace }): Promise<Banner[]> {
    const banners = await this.repository.fetchBanners({
      logTrace,
    });

    return this.transformer.fetchBanners({
      banners,
    });
  }
}
