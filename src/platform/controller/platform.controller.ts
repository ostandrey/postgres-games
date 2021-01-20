import { Body, Controller, Get, Post } from '@nestjs/common';
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
  findAll(): Promise<PlatformDto[]> {
    return this.platformService.find();
  }
}
