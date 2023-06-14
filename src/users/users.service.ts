import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson', email: 'anson@test.com' },
    { username: 'Cory', email: 'cory@test.com' },
    { username: 'Debbie', email: 'debbie@test.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  fetchUserById(id: number) {
    return { id, ...this.fakeUsers[id] };
  }

  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return 'Created';
  }
}
