import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  getAll(): Promise<PublisherDto[]> {
    return this.publisherService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id): Promise<PublisherDto> {
    return this.publisherService.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.publisherService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id, @Body() updatePublisherDto: PublisherDto) {
    return this.publisherService.update(id, updatePublisherDto);
  }
}
