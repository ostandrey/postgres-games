import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from '../entity/publisher.entity';
import { Repository } from 'typeorm';
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

  getAll(request, page: number = 1): Promise<PublisherDto[]> {
    if(request.title) {
      const searchString = request.title;
      return this.publisherRepository.find({title : `${searchString}`});
    }
    else return this.publisherRepository.find({
      take: 4,
      skip: 4 * (page - 1),
    });
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
