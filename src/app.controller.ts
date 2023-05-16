import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUser() {
    return { name: 'Thomas', email: 'thomas@example.com' };
  }
  @Post()
  store(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }
}
