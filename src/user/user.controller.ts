import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { userInfo } from 'os';

@Controller('/user')
export class UserController {
  //Dependency Injection
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }
  @Post()
  store(@Body() createUserDro: CreateUserDto) {
    return this.userService.create(createUserDro);
  }
  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }
  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }
  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
