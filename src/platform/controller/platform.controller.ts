import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PlatformService } from '../service/platform.service';
import { PlatformDto } from '../dto/platform.dto';

@Controller('platforms')
export class PlatformController {
  constructor(private platformService: PlatformService) {}

  @Post('/')
  create(@Body() platformDto: PlatformDto): Promise<PlatformDto> {
    return this.platformService.create(platformDto);
  }

  @Get('/')
  getAll(@Query() query: string,
         @Query('page') page: number,
         @Query('items_per_page') items: number,
         @Query('sorting') sort: number,
  ): Promise<PlatformDto[]> {
    return this.platformService.getAll(query, page, items, sort);
  }

  @Get('/:id')
  getOne(@Param('id') id): Promise<PlatformDto> {
    return this.platformService.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.platformService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id, @Body() updatePlatformDto: PlatformDto): Promise<PlatformDto> {
    return this.platformService.update(id, updatePlatformDto);
  }
}
