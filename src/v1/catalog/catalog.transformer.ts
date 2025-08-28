import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Banner } from './entity/bff-response';

@Injectable()
export class CatalogTransformer {
  constructor(private readonly configService: ConfigService) {}

  private core_kpn_image_base_url: string = this.configService.get(
    'CORE_KPN_IMAGE_BASE_URL',
  );

  fetchBanners({ banners }: { banners: any }): Banner[] {
    return banners.map(({ image }, i) => {
      return {
        banner_id: (i + 1).toString(),
        title: null,
        media: {
          small_image_url: `${this.core_kpn_image_base_url}/${image}`,
          large_image_url: `${this.core_kpn_image_base_url}/${image}`,
          label: `Fruits in online | Kovai pazhamudir nilayam | Vegetables online banner ${
            i + 1
          }`,
        },
      };
    });
  }
}
