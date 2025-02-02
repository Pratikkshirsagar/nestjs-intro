import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostService {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
    ];
  }
}
