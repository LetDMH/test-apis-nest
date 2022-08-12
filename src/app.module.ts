import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DoubanModule } from './core/douban/douban.module';

@Module({
  imports: [DoubanModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
