import { Controller, Get, Post, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request, @Param() params: object): string {
    console.log(req.params, params);
    return this.appService.getHello();
  }

  @Post()
  setHello(): string {
    return '';
  }
}
