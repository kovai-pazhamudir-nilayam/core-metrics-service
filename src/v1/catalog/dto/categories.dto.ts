import { IsEnum, IsNumberString, IsOptional } from 'class-validator';
import { CommonReqParams } from './common-req.dto';

export enum CATEGORY_TYPE {
  FRESH = 'FRESH',
  GROCERY = 'GROCERY',
}

export class L1CategoriesQueryDTO extends CommonReqParams {
  @IsNumberString()
  outlet_id: string;

  @IsOptional()
  @IsEnum(CATEGORY_TYPE)
  type: CATEGORY_TYPE;
}
