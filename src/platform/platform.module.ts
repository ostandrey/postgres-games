import { Module } from '@nestjs/common';
import { PlatformController } from './controller/platform.controller';
import { PlatformService } from './service/platform.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Platform } from './entity/platform.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Platform])],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}
