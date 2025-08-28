import { IsOptional, IsString } from 'class-validator';

export class CommonReqParams {
  @IsString()
  channel: string;

  @IsString()
  @IsOptional()
  version?: string;
}
