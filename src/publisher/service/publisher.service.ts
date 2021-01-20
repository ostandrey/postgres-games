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

  find(): Promise<PublisherDto[]> {
    return this.publisherRepository.find();
  }
}
