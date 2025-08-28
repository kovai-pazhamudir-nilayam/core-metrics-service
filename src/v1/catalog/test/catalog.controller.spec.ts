import {
  AllExceptionsFilter,
  HttpProvider,
  HttpService,
} from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { CatalogController } from '../catalog.contoller';
import { CatalogModule } from '../catalog.module';
import { CatalogService } from '../catalog.service';
import { CatalogRepository } from '../catalog.repository';
import { CatalogTransformer } from '../catalog.transformer';
import TopBannersSample from './fixtures/top-banners.sample';
import { restErrors } from '../../errors/rest';
import { ConfigService } from '@nestjs/config';
import CategoriesSample from './fixtures/categories.sample';

describe('CatalogController', () => {
  let controller: CatalogController;
  let app: NestFastifyApplication;
  let service: HttpService;

  const URL_OBJ = {
    CORE_KPN_URI: 'http://kpn-mock-uri',
    CORE_KPN_IMAGE_BASE_URL: 'https://ibo.com',
  };
  const configService = {
    get: (param: string) => {
      return URL_OBJ[param];
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CatalogModule],
      providers: [
        HttpService,
        CatalogService,
        ConfigService,
        CatalogRepository,
        CatalogTransformer,
        HttpProvider.RestErrors(restErrors),
      ],
    })
      .overrideProvider(ConfigService)
      .useValue(configService)
      .compile();
    app = module.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    app.useGlobalFilters(new AllExceptionsFilter());
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
    );
    app.enableVersioning({
      type: VersioningType.URI,
    });
    service = module.get<HttpService>(HttpService);
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
    controller = module.get<CatalogController>(CatalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call top-banners', async () => {
    jest
      .spyOn(service, 'rest')
      .mockResolvedValueOnce(TopBannersSample.InputPlain);
    return app
      .inject({
        method: 'GET',
        headers: { authorization: 'Bearer token' },
        url: '/banners?channel=WEB&version=1.0.0',
      })
      .then(result => {
        expect(result.statusCode).toEqual(200);
        expect(JSON.parse(result.payload)).toEqual(
          TopBannersSample.OutputPlain,
        );
      });
  });

  it('should call categories without type', async () => {
    jest
      .spyOn(service, 'rest')
      .mockResolvedValueOnce(CategoriesSample.InputPlain);
    return app
      .inject({
        method: 'GET',
        headers: { authorization: 'Bearer token' },
        url: '/categories?channel=WEB&version=1.0.0&outlet_id=68',
      })
      .then(result => {
        expect(result.statusCode).toEqual(200);
        expect(JSON.parse(result.payload)).toEqual(
          CategoriesSample.OutputPlain,
        );
      });
  });

  it('should call categories with type = GROCERY', async () => {
    jest
      .spyOn(service, 'rest')
      .mockResolvedValueOnce(CategoriesSample.InputPlain);
    return app
      .inject({
        method: 'GET',
        headers: { authorization: 'Bearer token' },
        url: '/categories?channel=WEB&version=1.0.0&outlet_id=68&type=GROCERY',
      })
      .then(result => {
        expect(result.statusCode).toEqual(200);
        expect(JSON.parse(result.payload)).toEqual(
          CategoriesSample.OutputPlainForGrocery,
        );
      });
  });

  it('should call categories with type = FRESH', async () => {
    jest
      .spyOn(service, 'rest')
      .mockResolvedValueOnce(CategoriesSample.InputPlain);
    return app
      .inject({
        method: 'GET',
        headers: { authorization: 'Bearer token' },
        url: '/categories?channel=WEB&version=1.0.0&outlet_id=68&type=FRESH',
      })
      .then(result => {
        expect(result.statusCode).toEqual(200);
        expect(JSON.parse(result.payload)).toEqual(
          CategoriesSample.OutputPlainForFresh,
        );
      });
  });
});
