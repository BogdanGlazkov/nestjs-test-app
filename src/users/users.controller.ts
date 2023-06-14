import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Anson', email: 'anson@test.com' }];
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    return userData;
  }
}
