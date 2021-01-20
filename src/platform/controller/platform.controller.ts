import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  getAll(): Promise<PlatformDto[]> {
    return this.platformService.getAll();
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
