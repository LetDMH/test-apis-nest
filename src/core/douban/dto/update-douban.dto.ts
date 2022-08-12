import { PartialType } from '@nestjs/mapped-types';
import { CreateDoubanDto } from './create-douban.dto';

export class UpdateDoubanDto extends PartialType(CreateDoubanDto) {}
