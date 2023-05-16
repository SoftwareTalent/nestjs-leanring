import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUsers() {
    return { name: 'Thomas', email: 'thomas@example.com' };
  }
  @Post()
  store(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }
  @Patch()
  update(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }
  // @Get('/:userId')
  // getUser(@Param() params: { userId: number }) {
  //   return params;
  // }
  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
