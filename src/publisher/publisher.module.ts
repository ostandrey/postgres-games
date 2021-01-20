import { Module } from '@nestjs/common';
import { PublisherController } from './controller/publisher.controller';
import { PublisherService } from './service/publisher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entity/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
