import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platform } from '../entity/platform.entity';
import { PlatformDto } from '../dto/platform.dto';
import { PublisherDto } from '../../publisher/dto/publisher.dto';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
  ) {}

  create(platform: PlatformDto): Promise<PlatformDto> {
    return this.platformRepository.save(platform);
  }

  getAll(): Promise<PlatformDto[]> {
    return this.platformRepository.find();
  }

  getOne(id): Promise<PlatformDto> {
    return this.platformRepository.findOne(id);
  }

  delete(id) {
    return this.platformRepository.delete(id);
  }

  update(id, updatePlatformDto: PlatformDto): Promise<PlatformDto> {
    return this.platformRepository.save({
      id: Number(id),
      ...updatePlatformDto,
    });
  }
}
