import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Thomas Jin', email: 'thomas@example.com' };
  }
  create(createUserDro: CreateUserDto) {
    return createUserDro;
  }
  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }
  show(userId: number) {
    return { userId };
  }
  delete(userId: number) {
    return { userId };
  }
}
