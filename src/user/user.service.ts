import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRespository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    return this.userRespository.find();
  }
  create(createUserDro: CreateUserDto) {
    return this.userRespository.save(createUserDro);
  }
  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRespository.update(userId, updateUserDto);
  }
  show(id: number) {
    return this.userRespository.findOne({ where: { id } });
  }
  delete(userId: number) {
    return this.userRespository.delete(userId);
  }
}
