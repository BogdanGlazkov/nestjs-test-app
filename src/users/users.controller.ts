import { Body, Controller, Get, Post } from '@nestjs/common';
// import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Anson', email: 'anson@test.com' }];
  }

  @Post('create')
  createUser(@Body() userData) {
    return userData;
  }
}
