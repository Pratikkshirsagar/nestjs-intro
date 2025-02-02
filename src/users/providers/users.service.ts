import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'Pratik',
        email: 'pratik@gmail.com',
      },
      {
        firstName: 'Akshay',
        email: 'akshay@gmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: 123,
      firstName: 'Pratik',
      email: 'pratik@gmail.com',
    };
  }
}
