import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
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

  getAll(request, page, items, sort): Promise<PlatformDto[]> {
    if(request.title) {
      const searchString = request.title;
      return this.platformRepository.find({title: Like(`%${searchString}%`)});
    }
    else if(items) {
      if (items == 10 || items == 20 || items == 50) {
        return this.platformRepository.find({
          take: items,
          skip: page * items,
        })
      }
    }
    else {
      if(sort == 'asc') {
        return this.platformRepository.find({
          order: {
            title: 1,
          }
        });
      }
      else if(sort == 'desc') {
        return this.platformRepository.find({
          order: {
            title: -1,
          }
        });
      }
    }
    return this.platformRepository.find()
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
