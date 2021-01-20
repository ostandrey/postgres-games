import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublisherService } from '../service/publisher.service';
import { PublisherDto } from '../dto/publisher.dto';

@Controller('publishers')
export class PublisherController {
  constructor(private publisherService: PublisherService) {}

  @Post('/')
  create(@Body() publisherDto: PublisherDto): Promise<PublisherDto> {
    return this.publisherService.create(publisherDto);
  }

  @Get('/')
  findAll(): Promise<PublisherDto[]> {
    return this.publisherService.find();
  }
}
