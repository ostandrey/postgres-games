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

  getAll(): Promise<PublisherDto[]> {
    return this.publisherRepository.find();
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
