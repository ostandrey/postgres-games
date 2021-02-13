import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from '../entity/publisher.entity';
import { Like, Repository } from 'typeorm';
import { PublisherDto } from '../dto/publisher.dto';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Publisher)
    private publisherRepository: Repository<Publisher>,
  ) {}

  create(publisher: PublisherDto): Promise<PublisherDto> {
    return this.publisherRepository.save(publisher);
  }

  getAll(request, page: number, items: number, sort): Promise<PublisherDto[]> {
    if(request.title) {
      const searchString = request.title;
      return this.publisherRepository.find({title: Like(`%${searchString}%`)});
    }
    else if(items) {
      if (items == 10 || items == 20 || items == 50) {
        return this.publisherRepository.find({
          take: items,
          skip: page * items,
        })
      }
    }
    else {
      if(sort == 'asc') {
        return this.publisherRepository.find({
          order: {
            title: 1,
          }
        });
      }
      else if(sort == 'desc') {
        return this.publisherRepository.find({
          order: {
            title: -1,
          }
        });
      }
    }
    return this.publisherRepository.find()
  }

  getOne(id): Promise<PublisherDto> {
    return this.publisherRepository.findOne(id);
  }

  delete(id) {
    return this.publisherRepository.delete(id);
  }

  update(id, updatePublisherDto: PublisherDto): Promise<PublisherDto> {
    return this.publisherRepository.save({
      id: Number(id),
      ...updatePublisherDto,
    });
  }
}
