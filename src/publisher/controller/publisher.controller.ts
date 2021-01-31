import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, Query,
} from '@nestjs/common';
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
  getAll(@Query() query: string,
         @Query('page') page: number,
         @Query('items_per_page') items: number,
         @Query('sorting') sort: number,
         ): Promise<PublisherDto[]> {
    return this.publisherService.getAll(query, page, items, sort);
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
