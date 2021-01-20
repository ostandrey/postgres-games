import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platform } from '../entity/platform.entity';
import { PlatformDto } from '../dto/platform.dto';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
  ) {}

  create(platform: PlatformDto): Promise<PlatformDto> {
    return this.platformRepository.save(platform);
  }

  find(): Promise<PlatformDto[]> {
    return this.platformRepository.find();
  }
}
